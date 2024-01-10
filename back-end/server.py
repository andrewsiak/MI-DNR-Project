
from flask import Flask, render_template, request, flash, session, redirect
from model import connect_to_db
import crud
from jinja2 import StrictUndefined

app = Flask(__name__)
app.secret_key = "dev"
app.jinja_env.undefined = StrictUndefined






@app.route("/")
def homepage():
    """View homepage."""

    return render_template("homepage.html")

@app.route("/test")
def test_page():
    """View test page."""

    return render_template("test.html")

# @app.route("/campgrounds")
# def all_campgrounds():
#     """All campgrounds."""

#     campgrounds = crud.get_campgrounds()

#     return render_template("campgrounds.html", campgrounds=campgrounds)


if __name__ == "__main__":
    # with app.appcontext:
            
    connect_to_db(app)
    app.run(host="0.0.0.0", debug=True)

    