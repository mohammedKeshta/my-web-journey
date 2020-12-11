import os
from flask import Flask, request, abort, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
import random

from models import setup_db, Book

BOOKS_PER_SHELF = 8


def create_pagination(current_request, selection):
    page = current_request.args.get('page', 1, type=int)
    start = (page - 1) * BOOKS_PER_SHELF
    end = start + BOOKS_PER_SHELF
    formatted_books = [book.format() for book in selection]

    return formatted_books[start:end]


# @TODO: General Instructions - As you're creating endpoints, define them and then search for 'TODO' within the
#  frontend to update the endpoints there. If you do not update the endpoints, the lab will not work - of no fault of
#  your API code! - Make sure for each route that you're thinking through when to abort and with which kind of error
#  - If you change any of the response body keys, make sure you update the frontend to correspond.


def create_app(test_config=None):
    # __name__ is the name of the current Python module.
    # The app needs to know where it’s located to set up some paths
    # instance_relative_config: tells the app that configuration files are
    # relative to the instance folder.
    app = Flask(__name__, instance_relative_config=True)
    setup_db(app)
    # resources = {r'*/api/*': {'origins': '*'}}
    CORS(app)

    @app.after_request
    def after_request(response):
        response.headers.add(
            'Access-Control-Allow-Headers',
            'Content-Type,Authorization,true')
        response.headers.add(
            'Access-Control-Allow-Methods',
            'GET,PATCH,POST,DELETE,OPTIONS')
        return response

    app.config.from_mapping(
        SECRET_KEY='dev',
        DATABASE=os.path.join(app.instance_path, 'flaskr.sqlite')
    )

    if test_config is None:
        # load the instance config, if it exists, when not testing
        app.config.from_pyfile('config.py', silent=True)
    else:
        # load the test config if passed in
        app.config.from_mapping(test_config)

    # ensure the instance folder exists
    try:
        os.makedirs(app.instance_path)
    except OSError:
        pass

    # @TODO: Write a route that retrivies all books, paginated.
    #         You can use the constant above to paginate by eight books.
    #         If you decide to change the number of books per page,
    #         update the frontend to handle additional books in the styling and pagination
    #         Response body keys: 'success', 'books' and 'total_books'
    # TEST: When completed, the webpage will display books including title,
    # author, and rating shown as stars
    @app.route('/books')
    def index():
        query = Book.query.order_by(Book.id)
        selection = query.all()
        current_books = create_pagination(request, selection)

        if len(current_books) == 0:
            abort(404)

        return jsonify({'status': 'success',
                        'books': current_books,
                        'total_books': query.count()})

    # @TODO: Write a route that will update a single book's rating.
    #         It should only be able to update the rating, not the entire representation
    #         and should follow API design principles regarding method and route.
    #         Response body keys: 'success'
    # TEST: When completed, you will be able to click on stars to update a
    # book's rating and it will persist after refresh
    @app.route('/books/<int:book_id>', methods=['PATCH'])
    def update(book_id):
        try:
            body = request.get_json(silent=True)
            book = Book.query.get(book_id)
            if book is None:
                abort(400)
            if 'rating' in body:
                book.rating = int(body.get('rating'))
            book.update()
            return jsonify({'status': 'success',
                            'message': f'Book with ID:{book.id} is updated Successfully',
                            'book': book.format()})
        except Exception as e:
            return jsonify({'status': 'error',
                            'message': f'Book with id: {book_id} not updated successfully',
                            'error': str(e)})

    # @TODO: Write a route that will delete a single book.
    #        Response body keys: 'success', 'deleted'(id of deleted book), 'books' and 'total_books'
    #        Response body keys: 'success', 'books' and 'total_books'

    # TEST: When completed, you will be able to delete a single book by
    # clicking on the trashcan.
    @app.route('/books/<int:book_id>', methods=['DELETE'])
    def delete(book_id):
        try:
            # Delete Targeted Book
            book = Book.query.get(book_id)

            if book is None:
                abort(400)

            book.delete()

            # Get Books
            selection = Book.query.order_by(Book.id).all()
            current_books = create_pagination(request, selection)

            return jsonify({'success': 'success',
                            'message': f'deleted {book.id}',
                            'books': current_books,
                            'total_books': len(selection)})
        except Exception as e:
            return jsonify({'status': 'error',
                            'message': f'Book with id: {book_id} not deleted successfully',
                            'error': str(e)})

    # @TODO: Write a route that create a new book.
    #        Response body keys: 'success', 'created'(id of created book), 'books' and 'total_books'
    # TEST: When completed, you will be able to a new book using the form. Try doing so from the last page of books.
    # Your new book should show up immediately after you submit it at the end
    # of the page.
    @app.route('/books', methods=['POST'])
    def create():
        body = request.get_json()
        new_title = body.get('title', None)
        new_author = body.get('author', None)
        new_rating = body.get('rating', None)
        try:
            book = Book(title=new_title, author=new_author, rating=new_rating)
            book.insert()
            # Get Books
            selection = Book.query.order_by(Book.id).all()
            current_books = create_pagination(request, selection)

            return jsonify({'success': 'success',
                            'message': f'Book created with ID:{book.id}',
                            'books': current_books,
                            'total_books': len(Book.query.all())})
        except Exception as e:
            return jsonify({'status': 'error',
                            'message': f'Book not created successfully',
                            'error': str(e)})

    @app.errorhandler(400)
    def bad_request(error):
        return jsonify({'status': 'error',
                        'message': f'{error}',
                        'error': 400}), 400

    @app.errorhandler(404)
    def not_found(error):
        return jsonify({'status': 'error',
                        'message': f'{error}',
                        'error': 404}), 404

    @app.errorhandler(422)
    def unprocessable(error):
        return jsonify({'status': 'error',
                        'message': f'{error}',
                        'error': 422}), 422

    @app.errorhandler(405)
    def method_not_allowed(error):
        return jsonify({'status': 'error',
                        'message': f'{error}',
                        'error': 405}), 405
    return app
