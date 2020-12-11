import os
from flask import Flask, request, abort, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
import random

from models import setup_db, Question, Category

QUESTIONS_PER_PAGE = 10

"""
Utility for handling pagination
"""


def paginate_questions(request, selection):
    page = request.args.get('page', 1, type=int)
    start = (page - 1) * QUESTIONS_PER_PAGE
    end = start + QUESTIONS_PER_PAGE

    questions = [question.format() for question in selection]
    current_questions = questions[start:end]

    return current_questions


def create_app(test_config=None):
    # create and configure the app
    app = Flask(__name__)
    # set up data-base
    setup_db(app)
    # set up CORS, allowing all origins
    CORS(app, resources={'/': {'origins': '*'}})

    # set control access
    @app.after_request
    def after_request(response):
        response.headers.add('Access-Control-Allow-Headers',
                             'Content-Type,Authorization,true')
        response.headers.add('Access-Control-Allow-Methods',
                             'GET,PUT,POST,DELETE,OPTIONS')
        return response

    @app.route('/categories')
    def get_categories():
        """
        Handle GET requests for all available categories
        """
        # get all categories
        categories = Category.query.order_by(Category.type).all()

        # abort 404 if no categories found
        if len(categories) == 0:
            abort(404)

        # format response
        formatted_categories = {}
        for category in categories:
            formatted_categories[category.id] = category.type

        # return data to view
        return jsonify({
            'success': True,
            'categories': formatted_categories
        })

    @app.route('/questions')
    def get_questions():
        """
        handle GET requests for questions, including pagination (every 10 questions)
        :return: question, total_questions, categories
        """
        # get all questions and paginate
        questions = Question.query.order_by(Question.id).all()
        current_questions = paginate_questions(request, questions)

        # get all categories and format
        categories = Category.query.order_by(Category.type).all()
        formatted_categories = {}
        for category in categories:
            formatted_categories[category.id] = category.type

        # abort 404 if no questions
        if len(current_questions) == 0:
            abort(404)

        # return data to view
        return jsonify({
            'success': True,
            'questions': current_questions,
            'total_questions': len(questions),
            'categories': formatted_categories
        })

    @app.route('/questions/<int:question_id>', methods=['DELETE'])
    def delete_question(question_id):
        """
            DELETE question using a question ID.
        :param question_id:
        :return: deleted question_id
        """
        try:
            # get targeted question
            question = Question.query.filter(
                Question.id == question_id).one_or_none()
            print(question)
            # abort 404 if no question found
            if question is None:
                abort(404)

            # delete the question
            question.delete()

        except BaseException:
            abort(422)

        # return data to view
        return jsonify({
            'success': True,
            'deleted': question_id
        })

    @app.route('/questions', methods=['POST'])
    def post_question():
        """
            CREATE new question or search and
            will require the question and answer text,
            category, and difficulty score.
        :return: posted question, searched questions
        """
        # load the request body
        body = request.get_json()
        # handle if the user send empty search term
        if 'searchTerm' in body and body.get('searchTerm') == '':
            # get all questions and paginate
            questions = Question.query.order_by(Question.id).all()
            current_questions = paginate_questions(request, questions)
            # return results
            return jsonify({
                'success': True,
                'questions': current_questions,
                'total_questions': Question.query.count()
            })
        # if search term exist
        if body.get('searchTerm'):
            # get search term
            print('here serach')
            search_term = body.get('searchTerm')
            print(f'test: {search_term}')
            # get all questions and paginate
            search_results = Question.query.filter(
                Question.question.ilike(
                    '%{}%'.format(search_term))).all()

            # 404 if no results found
            if len(search_results) == 0:
                abort(404)

            # return results
            return jsonify({
                'success': True,
                'questions': [question.format() for question in search_results],
                'total_questions': len(search_results)
            })
        # if no search term, add new question to database
        else:
            new_question = body.get('question')
            new_answer = body.get('answer')
            new_difficulty = body.get('difficulty')
            new_category = body.get('category')

            # ensure all fields have data
            if new_question is None or new_answer is None or new_difficulty is None or new_category is None:
                abort(422)

            try:
                # insert new question
                question = Question(
                    question=new_question,
                    answer=new_answer,
                    difficulty=new_difficulty,
                    category=new_category)
                question.insert()

                # get all questions and paginate
                questions = Question.query.order_by(Question.id).all()
                current_questions = paginate_questions(request, questions)

                # return data to view
                return jsonify({
                    'success': True,
                    'created': question.id,
                    'question_created': question.question,
                    'questions': current_questions,
                    'total_questions': len(questions)
                })
            except Exception as e:
                print(str(e))
                # abort unprocessable if exception
                abort(422)

    @app.route('/categories/<int:category_id>/questions')
    def get_questions_by_category(category_id):
        """
            Handles GET requests for getting questions based on category.
        """
        # get the category by id
        category = Category.query.filter(
            Category.id == category_id).one_or_none()

        # abort 400 for bad request if category isn't found
        if category is None:
            abort(400)

        # get targeted question
        questions = Question.query.filter(
            Question.category == category_id).order_by(
            Question.id).all()
        # paginate the questions
        current_questions = paginate_questions(request, questions)

        # return data to view
        return jsonify({
            'success': True,
            'questions': current_questions,
            'total_questions': len(questions),
            'current_category': category.type
        })

    @app.route('/quizzes', methods=['POST'])
    def get_random_quiz_question():
        """
        Handles POST requests for playing quiz.
        """
        # load the request body
        body = request.get_json()

        # get the previous question
        previous_questions = body.get('previous_questions')

        # get the category
        quiz_category = body.get('quiz_category')

        # abort 400 if category or previous questions isn't found
        if not ('quiz_category' in body and 'previous_questions' in body):
            abort(400)

        # get questions all questions if "ALL" is selected
        if quiz_category['id'] == 0:
            questions = Question.query.all()
        # load questions for given category
        else:
            questions = Question.query.filter_by(
                category=quiz_category['id']).all()

        # picks a random question
        def get_random_question():
            return questions[random.randrange(0, len(questions), 1)]

        # checks to see if question has already been used
        def is_used_question(selected_question_id):
            return selected_question_id in previous_questions

        # get random question
        question = get_random_question()

        # check if used, execute until unused question found
        while is_used_question(question.id):
            question = get_random_question()

            # if all questions have been returned, return no question
            if len(previous_questions) == len(questions):
                return jsonify({
                    'success': True
                })
        # return the question
        return jsonify({
            'success': True,
            'question': question.format()
        })

    @app.errorhandler(404)
    def not_found(error):
        return jsonify({
            "success": False,
            "error": 404,
            "message": "resource not found"
        }), 404

    @app.errorhandler(422)
    def unprocessable(error):
        return jsonify({
            "success": False,
            "error": 422,
            "message": "unprocessable"
        }), 422

    @app.errorhandler(400)
    def bad_request(error):
        return jsonify({
            "success": False,
            "error": 400,
            "message": "bad request"
        }), 400

    @app.errorhandler(405)
    def method_not_allowed(error):
        return jsonify({
            "success": False,
            "error": 405,
            "message": "method not allowed"
        }), 405

    return app
