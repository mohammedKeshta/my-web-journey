import os
from flask import Flask, request, jsonify, abort
from sqlalchemy import exc
import json
from flask_cors import CORS
from .database.models import db_drop_and_create_all, setup_db, Drink
from .auth.auth import AuthError, requires_auth

app = Flask(__name__)
setup_db(app)
CORS(app)

'''
@TODO uncomment the following line to initialize the datbase
!! NOTE THIS WILL DROP ALL RECORDS AND START YOUR DB FROM SCRATCH
!! NOTE THIS MUST BE UNCOMMENTED ON FIRST RUN
'''


# db_drop_and_create_all()


# ROUTES


@app.route('/drinks')
def get_drinks():
    """
    Handle Getting All Drinks with short data representation
    """

    # Get All Drinks
    drinks = Drink.query.order_by(Drink.id).all()

    # if no drinks exist
    if len(drinks) == 0:
        abort(404)

    # format drinks using drink.short() data representation
    drinks_short = [drink.short() for drink in drinks]

    # return drinks
    return jsonify({
        "success": True,
        "drinks": drinks_short})


@app.route('/drinks-detail')
@requires_auth('get:drinks-detail')
def get_drinks_detail(jwt):
    """
    Handle Getting All Drinks with long data representation
    for only user with 'get:drinks-detail' permission
    """

    # Get All Drinks
    drinks = Drink.query.order_by(Drink.id).all()

    # if no drinks exist
    if len(drinks) == 0:
        abort(404)

    # format drinks using drink.long() data representation
    drinks_long = [drink.long() for drink in drinks]

    # return details for drinks
    return jsonify({
        "success": True,
        "drinks": drinks_long
    })


@app.route("/drinks", methods=['POST'])
@requires_auth('post:drinks')
def add_drink(jwt):
    """
    Handle Create New Drink
    for only user with 'post:drinks' permission
    """

    # load the request body
    body = request.get_json()
    title = body['title']
    recipe = body['recipe']
    # abort 400 if title or recipe drink isn't found
    if title is None or recipe is None:
        abort(400)

    try:
        # create a new drink
        drink = Drink(title=title, recipe=json.dumps(recipe))
        drink.insert()

        return jsonify({
            'success': True,
            'drinks': [drink.long()],
        })

    except BaseException:
        # unprocessable
        abort(422)


@app.route("/drinks/<int:drink_id>", methods=['PATCH'])
@requires_auth('patch:drinks')
def update_drink(jwt, drink_id):
    """
    Handle editing existing drink
    for only user with 'patch:drinks' permission
    """

    # get targeted drink
    drink = Drink.query.filter(Drink.id == drink_id).one_or_none()

    # if drink not found
    if drink is None:
        abort(404)

    # load the request body
    body = request.get_json()

    # if title exist
    if 'title' in body:
        drink.title = body['title']

    # if title exist
    if 'recipe' in body:
        drink.recipe = json.dumps(body['recipe'])

    try:
        # update drink in database
        drink.update()
        return jsonify({
            'success': True,
            'drinks': [drink.long()],
        })
    except BaseException:
        # unprocessable
        abort(422)


@app.route("/drinks/<int:drink_id>", methods=['DELETE'])
@requires_auth('delete:drinks')
def delete_drink(jwt, drink_id):
    """
    Handle deleting existing drink
    for only user with 'delete:drinks' permission
    """

    # get targeted drink
    drink = Drink.query.filter(Drink.id == drink_id).one_or_none()

    # if drink not found
    if drink is None:
        abort(404)

    try:
        # delete drink
        drink.delete()
        # return id of deleted drink
        return jsonify({
            'success': True,
            'delete': drink.id
        })
    except BaseException:
        abort(422)


# Error Handling
@app.errorhandler(422)
def unprocessable(error):
    """
     Error handling for unprocessable entity
   """
    return jsonify({
        "success": False,
        "error": 422,
        "message": "unprocessable"
    }), 422


@app.errorhandler(404)
def resource_not_found(error):
    """
        Error handling for resource not found
    """
    return jsonify({
        "success": False,
        "error": 404,
        "message": "resource not found"
    }), 404


@app.errorhandler(400)
def resource_not_found(error):
    """
    Error handling for bad request
    """
    return jsonify({
        "success": False,
        "error": 400,
        "message": "bad request"
    }), 400


@app.errorhandler(AuthError)
def handle_auth_error(ex):
    """
        Error handling for AuthError
    """
    return jsonify({
        "success": False,
        "error": ex.status_code,
        'message': ex.error
    }), 401
