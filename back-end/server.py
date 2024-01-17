
from flask import Flask, render_template, request, flash, session, redirect, jsonify
from model import connect_to_db
from crud import *
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

# Will need to use the below - modify for this project api
@app.route('/api/campgrounds')
def get_campground():
    campgrounds = get_campgrounds()
    # campground_dicts = {}
    # for campground in campgrounds:
    #    campground_dicts.append(campground.serialize())
    # return jsonify(campground.campground_id)
    return jsonify({campground.campground_id: campground.serialize() for campground in campgrounds})


# Will need to use the below - modify for this project api
# @app.route('/api/campgrounds')
# def get_campgrounds():
#     campgrounds = Campground.query.all()
#     return jsonify({melon.melon_code: melon.to_dict() for melon in melons})

    # def toJson(self):
    #     return json.dumps(self, default=lambda o: o.__dict__)
    
# @app.route('/api/melons')
# def get_melons():
#     melons = Melon.query.all()


#  pulled from react shopping site solution exercise:
    #  melon_dicts = []
    #  for melon in melons:
    #  melon_dicts = melon.to_dict() for melon in melons
    #  return jsonify({melon.melon_code: melon_dicts})


if __name__ == "__main__":
    # with app.appcontext:
            
    connect_to_db(app)
    app.run(host="0.0.0.0", debug=True)

    