
from flask import Flask, render_template, request, flash, session, redirect, jsonify, abort
# import flast_bcrypt import Bcrypt
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


@app.route('/api/campgrounds')
def get_campground_list():
    """API for campgrounds"""

    campgrounds = crud.get_campgrounds()
    campground_list = []
    for campground in campgrounds:
       campground_list.append(campground.serialize())
    return jsonify(campground_list)
    # return jsonify([campground.serialize() for campground in campgrounds])

# @app.route('/api/campgrounds/<id>')
# def get_campground_by_id(id):
#     """Display information for a campground"""
#     campground_info = crud.get_campgrounds_by_id(id)

#     return jsonify(campground_info)


# @app.route('/api/map_data/<id>')
# def get_map_data(id):
#     """API for map data"""
#     map_info = crud.get_map_by_id(id)

#     return jsonify(map_info)


@app.route('/api/login', methods=["POST"])
def user_login():
    """Log in a user"""

    email = request.json["email"]
    password = request.json["password"]
    print("#" * 20)
    print("the JSON is:", request.json)
    user = crud.get_user_by_email(email=email).first()
    
    if not user or user.password != password:
        return jsonify({"error": "Unauthorized"}), 401
    
    return jsonify({
        "id": user.id,
        "email": user.email
    })

@app.route('/favorites', methods=["POST"])

def user_favorites():


    favorites = crud.get_favorites().all()

    favorites_list = []
    for favorite in favorites:
       favorites_list.append(favorite.serialize())
    return jsonify(favorites_list)


if __name__ == "__main__":
    # with app.appcontext:
            
    connect_to_db(app)
    app.run(host="0.0.0.0", debug=True)

    # @app.route('/account')

# def user_account(id):
    
#     user_info = crud.get_user_by_id(id)

#     return jsonify(user_info)


# @app.route("/api/register_user")
# def register_user():
#     email = request.json["email"]
#     password = request.json["password"]

#     user_exists = User.query.filter_by(email=email).first() is not None

#     if user_exists:
#         abort(409)


    # hashed_password = bcrypt.generate_password_hash(password)
        
    # if using bcrypt replace below with "password=hashed_password" 
    # new_user = User(email=email, password=password)

    # return ""
    





