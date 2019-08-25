from flask import Flask, render_template

app = Flask(__name__)


@app.route("/")
def index():
    headline = "Hello World"
    return render_template("index.html", headline=headline)


@app.route("/<string:name>")
def say_name(name):
    return render_template("index.html", name=name)


if __name__ == "__main__":
    app.run(debug=True)
