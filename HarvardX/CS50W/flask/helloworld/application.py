from flask import Flask

app = Flask(__name__)
app.debug = True


@app.route("/")
def index():
    return "Hello, World"


@app.route("/<string:name>")
def say_name(name):
    return f"<h1>Hello, {name.capitalize()}!!</h1>"
