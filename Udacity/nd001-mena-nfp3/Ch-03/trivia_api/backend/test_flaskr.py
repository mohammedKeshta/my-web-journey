import os
import unittest
import json
from flask_sqlalchemy import SQLAlchemy

from flaskr import create_app

from models import setup_db, Question, Category


class TriviaTestCase(unittest.TestCase):
    """This class represents the trivia test case"""

    def setUp(self):
        """Define test variables and initialize app."""
        self.app = create_app()
        self.client = self.app.test_client
        self.database_name = "trivia_test"
        self.database_path = "postgres://{}:{}@{}/{}".format(
            'mohammdelzanaty', 'M3l2o18#', 'localhost:5432', self.database_name)
        setup_db(self.app, self.database_path)

        # binds the app to the current context
        with self.app.app_context():
            self.db = SQLAlchemy()
            self.db.init_app(self.app)
            # create all tables
            self.db.create_all()

        # Fake Question
        self.new_question = {
            'question': 'What movie or book do you know the most quotes from?',
            'answer': 'Introduction To Programming',
            'difficulty': 3,
            'category': '3'
        }

    def tearDown(self):
        """Executed after reach test"""
        pass

    def test_get_categories(self):
        """Tests categories success"""

        # get response and load data
        res = self.client().get('/categories')
        data = json.loads(res.data)

        # check status code and message
        self.assertEqual(res.status_code, 200)
        self.assertEqual(data['success'], True)

    def test_404_sent_requesting_non_existing_category(self):
        """Tests if requesting non existing category"""

        # get response and load data
        res = self.client().get('/categories/1232')
        data = json.loads(res.data)

        # check status code and message
        self.assertEqual(res.status_code, 404)
        self.assertEqual(data['success'], False)
        self.assertEqual(data['message'], 'resource not found')

    def test_get_paginated_questions(self):
        """Tests question pagination success"""

        # get response and load data
        res = self.client().get('/questions')
        data = json.loads(res.data)

        # check status code and message
        self.assertEqual(res.status_code, 200)
        self.assertEqual(data['success'], True)

        # check that total_questions and questions return data
        self.assertTrue(data['total_questions'])
        self.assertTrue(len(data['questions']))

    def test_404_request_beyond_valid_page(self):
        """Tests question pagination failure 404"""

        # send request with bad page data, load response
        res = self.client().get('/questions?page=1000')
        data = json.loads(res.data)

        # check status code and message
        self.assertEqual(res.status_code, 404)
        self.assertEqual(data['success'], False)
        self.assertEqual(data['message'], 'resource not found')

    def test_delete_question(self):
        """Tests question deletion success"""

        # create a new question to be deleted
        question = Question(
            question=self.new_question['question'],
            answer=self.new_question['answer'],
            category=self.new_question['category'],
            difficulty=self.new_question['difficulty'])
        question.insert()

        # get the id of the new question
        question_id = question.id

        # delete the question and store response
        res = self.client().delete(f'/questions/{question_id}')
        data = json.loads(res.data)

        # check if question deleted or not
        question = Question.query.filter(
            Question.id == question_id).one_or_none()

        # check status code and success message
        self.assertEqual(res.status_code, 200)
        self.assertEqual(data['success'], True)

        # check if question id matches deleted id
        self.assertEqual(data['deleted'], question_id)

        # check if question equals None after delete
        self.assertEqual(question, None)

    def test_404_sent_deleting_non_existing_question(self):
        """Tests delete question not exist """

        # get response and load data
        res = self.client().delete('/questions/mohammed-elzanaty')
        data = json.loads(res.data)

        # check status code and message
        self.assertEqual(res.status_code, 404)
        self.assertEqual(data['success'], False)
        self.assertEqual(data['message'], 'resource not found')

    def test_new_question(self):
        """Tests question creation success"""

        # get number of all question before post new one
        old_questions_len = Question.query.count()

        # create new question and load response data
        res = self.client().post('/questions', json=self.new_question)
        data = json.loads(res.data)

        # check status code and message
        self.assertEqual(res.status_code, 200)
        self.assertEqual(data['success'], True)

        # get number of all question after post
        new_questions_len = Question.query.count()

        # check if new question added
        self.assertTrue(new_questions_len, old_questions_len + 1)

        # see if the question has been created
        new_question_id = data['created']
        question = Question.query.filter(
            Question.id == new_question_id).one_or_none()

        # check that question is not None
        self.assertIsNotNone(question)

    def test_422_if_question_creation_fails(self):
        """Tests question creation failure 422"""

        # create new question without json data, then load response data
        res = self.client().post('/questions', json={'question': 'fake one'})
        data = json.loads(res.data)

        # check status code and success message
        self.assertEqual(res.status_code, 422)
        self.assertEqual(data['success'], False)
        self.assertEqual(data['message'], 'unprocessable')

    def test_search_questions(self):
        """Tests search questions success"""

        # send post request with search term
        payload = {'searchTerm': 'a'}
        res = self.client().post('/questions', json=payload)
        data = json.loads(res.data)

        # check status code and success message
        self.assertEqual(res.status_code, 200)
        self.assertEqual(data['success'], True)

        # make sure there's result
        self.assertIsNotNone(data['questions'])
        self.assertIsNotNone(data['total_questions'])

    def test_404_if_search_questions_fails(self):
        """Tests search questions failure 404"""

        # send post request with search term that should fail and load response
        # data
        payload = {'searchTerm': 'zanaty'}
        res = self.client().post('/questions', json=payload)
        data = json.loads(res.data)

        # check response status code and message
        self.assertEqual(res.status_code, 404)
        self.assertEqual(data['success'], False)
        self.assertEqual(data['message'], 'resource not found')

    def test_get_questions_by_category(self):
        """Tests getting questions by category success"""

        category_id = 1
        res = self.client().get(f'/categories/{category_id}/questions')
        data = json.loads(res.data)

        # check status code and success message
        self.assertEqual(res.status_code, 200)
        self.assertEqual(data['success'], True)

        # make sure there's result and current category is 'Science'
        self.assertEqual(data['current_category'], 'Science')
        self.assertIsNotNone(data['questions'])
        self.assertIsNotNone(data['total_questions'])

    def test_400_if_questions_by_category_fails(self):
        """Tests getting questions by category failure 400"""

        # send request with category id 4894
        category_id = 4894
        res = self.client().get(f'/categories/{category_id}/questions')
        data = json.loads(res.data)

        # check response status code and message
        self.assertEqual(res.status_code, 400)
        self.assertEqual(data['success'], False)
        self.assertEqual(data['message'], 'bad request')

    def test_play_quiz_game(self):
        """Tests playing quiz game success"""

        # send post request with category and previous questions
        payload = {
            "previous_questions": [1, 2, 3],
            "quiz_category": {
                "id": 4,
                "type": "New One"
            }
        }
        res = self.client().post('/quizzes', json=payload)
        data = json.loads(res.data)

        # check response status code and message
        self.assertEqual(res.status_code, 200)
        self.assertEqual(data['success'], True)

        # check that a question is returned
        self.assertTrue(data['question'])

        # check that the question returned is in correct category
        self.assertEqual(data['question']['category'], 4)

        # check that question returned is not on previous q list
        self.assertNotEqual(data['question']['id'], 100)
        self.assertNotEqual(data['question']['id'], 20)

    def test_400_if_play_quiz_fails(self):
        """Tests playing quiz game failure 400"""

        # send post request with empty payload
        res = self.client().post('/quizzes', json={})
        data = json.loads(res.data)

        # check response status code and message
        self.assertEqual(res.status_code, 400)
        self.assertEqual(data['success'], False)
        self.assertEqual(data['message'], 'bad request')


# Make the tests conveniently executable
if __name__ == "__main__":
    unittest.main()
