from flask import Flask, render_template, request, session
from flask_session import Session


app = Flask(__name__)

app.config["SESSION_PERMANENT"] = False
app.config["SESSION_TYPE"] = "filesystem"
Session(app)


@app.route("/", methods=["GET", "POST"])
def index():
    notes = session["notes"]
    if session.get("notes") is None:
        notes = []
    if request.method == "POST":
        note = request.form.get("note")
        notes.append(note)
    return render_template("index.html", notes=notes)


if __name__ == "__main__":
    app.run(debug=True)
