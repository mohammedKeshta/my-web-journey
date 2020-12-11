import os
import unittest
import json

from flask_sqlalchemy import SQLAlchemy
from flaskr import create_app
from models import setup_db, Book


class BookTestCase(unittest.TestCase):
    """This class represents the trivia test case"""

    def setUp(self):
        """Define test variables and initialize app."""
        self.app = create_app()
        self.client = self.app.test_client
        self.database_name = "bookshelf_test"
        self.database_path = "postgres://{}:{}@{}/{}".format(
            'mohammdelzanaty', 'M3l2o18#', 'localhost:5432', self.database_name)
        setup_db(self.app, self.database_path)

        self.new_book = {
            'title': 'Anansi Boys',
            'author': 'Neil Gaiman',
            'rating': 5
        }

        # binds the app to the current context
        with self.app.app_context():
            self.db = SQLAlchemy()
            self.db.init_app(self.app)
            # Drop All Tables
            self.db.drop_all()
            # create all tables
            self.db.create_all()

    def tearDown(self):
        """Executed after reach test"""
        pass

    def test_get_paginated_books(self):
        """Get All Books"""
        res = self.client().get('/books')
        data = json.loads(res.data)
        self.assertEqual(res.status_code, 200)
        self.assertEqual(data['status'], 'success')
        self.assertTrue(data['total_books'])
        self.assertTrue(len(data['books']))

    def test_404_sent_requesting_beyond_valid_page(self):
        res = self.client().get('/books?page=1000')
        data = json.loads(res.data)

        self.assertEqual(res.status_code, 404)
        self.assertEqual(data['error'], 404)
        self.assertEqual(data['status'], 'error')

    def test_update_book_rating(self):
        res = self.client().patch('/books/1', json={'rating': 4})
        data = json.loads(res.data)

        # Get Updated Book
        book = Book.query.filter(Book.id == 1).one_or_none()
        self.assertEqual(res.status_code, 200)
        self.assertEqual(book.format()['rating'], 4)
        self.assertEqual(data['message'], f'Book with ID:1 is updated Successfully')
        self.assertEqual(data['status'], 'success')


    def test_400_for_failed_update(self):
        res = self.client().patch('/books/10')
        data = json.loads(res.data)
        self.assertEqual(res.status_code, 200)
        self.assertEqual(data['status'], 'error')
        self.assertEqual(data['message'], f'Book with id: 10 not updated successfully')


    def test_delete_book(self):
        pass

    def test_delete_book_not_exist(self):
        pass

    def test_create_new_book(self):
        pass

    def test_405_if_book_creation_not_allowed(self):
        pass


# Make the tests conveniently executable
if __name__ == "__main__":
    unittest.main()
