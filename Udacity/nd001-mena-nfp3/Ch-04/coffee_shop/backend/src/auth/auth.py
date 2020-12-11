import json
from functools import wraps
from urllib.request import urlopen

from flask import request
from jose import jwt

AUTH0_DOMAIN = 'mohammedelzanaty129.us.auth0.com'
ALGORITHMS = ['RS256']
API_AUDIENCE = 'drink'

# AuthError Exception
'''
AuthError Exception
A standardized way to communicate auth failure modes
'''


class AuthError(Exception):
    def __init__(self, error, status_code):
        self.error = error
        self.status_code = status_code


# Auth Header


def get_token_auth_header():
    """
       Obtains the Access Token from the Authorization Header
    """

    # get auth from header and verify auth exists
    auth = request.headers.get('Authorization', None)

    if not auth:
        raise AuthError({
            'code': 'authorization_header_missing',
            'description': 'Authorization header is expected.'
        }, 401)

    # split keyword and token
    header_parts = auth.split(' ')

    # verify keyword is 'bearer', raise error if not
    if header_parts[0].lower() != 'bearer':
        raise AuthError({
            'code': 'invalid_header',
            'description': 'Authorization header must start with "Bearer".'
        }, 401)
    # auth header must have 2 parts
    elif len(header_parts) == 1:
        raise AuthError({
            'code': 'invalid_header',
            'description': 'Token not found.'
        }, 401)

    # auth header must have 2 parts
    elif len(header_parts) > 2:
        raise AuthError({
            'code': 'invalid_header',
            'description': 'Authorization header must be bearer token.'
        }, 401)

    # get token from parts and return
    token = header_parts[1]
    return token


def check_permissions(permission, payload):
    """
        Verifies user permissions
    """

    # verify permissions included in JWT
    if 'permissions' not in payload:
        raise AuthError({
            'code': 'invalid_claims',
            'description': 'Permissions not included in JWT.'
        }, 400)
    # verify user permissions from payload contain permission for given route
    if permission not in payload['permissions']:
        raise AuthError({
            'code': 'unauthorized',
            'description': 'Permission not found.'
        }, 401)

    # return True if no AuthErrors raised
    return True


def verify_decode_jwt(token):
    """
        Validates and decodes Auth0 JWTs
    """

    # GET THE PUBLIC KEY FROM AUTH0
    jsonurl = urlopen(f'https://{AUTH0_DOMAIN}/.well-known/jwks.json')
    jwks = json.loads(jsonurl.read())

    # GET THE DATA IN THE HEADER
    unverified_header = jwt.get_unverified_header(token)

    # CHOOSE OUR KEY
    rsa_key = {}
    if 'kid' not in unverified_header:
        raise AuthError({
            'code': 'invalid_header',
            'description': 'Authorization malformed.'
        }, 401)

    for key in jwks['keys']:
        if key['kid'] == unverified_header['kid']:
            rsa_key = {
                'kty': key['kty'],
                'kid': key['kid'],
                'use': key['use'],
                'n': key['n'],
                'e': key['e']
            }
    # Finally, verify!!!
    if rsa_key:
        try:
            # USE THE KEY TO VALIDATE THE JWT
            payload = jwt.decode(
                token,
                rsa_key,
                algorithms=ALGORITHMS,
                audience=API_AUDIENCE,
                issuer='https://' + AUTH0_DOMAIN + '/'
            )

            return payload

        except jwt.ExpiredSignatureError:
            raise AuthError({
                'code': 'token_expired',
                'description': 'Token expired.'
            }, 401)

        except jwt.JWTClaimsError:
            raise AuthError({
                'code': 'invalid_claims',
                'description': 'Incorrect claims. Please, check the audience and issuer.'
            }, 401)
        except Exception:
            raise AuthError({
                'code': 'invalid_header',
                'description': 'Unable to parse authentication token.'
            }, 400)
    raise AuthError({
        'code': 'invalid_header',
        'description': 'Unable to find the appropriate key.'
    }, 400)


def requires_auth(permission=''):
    """
        Decorator function used for adding authorization to endpoints
    """

    def requires_auth_decorator(f):
        @wraps(f)
        def wrapper(*args, **kwargs):
            # get token from header
            token = get_token_auth_header()
            # decode and validate token
            payload = verify_decode_jwt(token)
            # check user permissions
            check_permissions(permission, payload)
            return f(payload, *args, **kwargs)

        return wrapper

    return requires_auth_decorator
