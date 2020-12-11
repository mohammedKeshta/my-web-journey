from flask import Flask, abort, jsonify, request
from functools import wraps

app = Flask(__name__)


def get_token_auth_header():
    if 'Authorization' not in request.headers:
        abort(401)

    auth_header = request.headers['Authorization']
    header_parts = auth_header.split(' ')
    if len(header_parts) != 2:
        abort(401)
    elif header_parts[0].lower() != 'bearer':
        abort(401)

    return header_parts[1]


def require_auth(f):
    @wraps(f)
    def wrapper(*args, **kwargs):
        jwt = get_token_auth_header()
        return f(jwt, *args, **kwargs)

    return wrapper


@app.route('/')
@require_auth
def hello_world(jwt):
    return jsonify({
        'success': True,
        'token': jwt
    })
