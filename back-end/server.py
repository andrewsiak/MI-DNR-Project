
from flask import Flask, render_template, request, flash, session, redirect, jsonify, abort
# import flast_bcrypt import Bcrypt
from model import connect_to_db
import crud
from jinja2 import StrictUndefined
import os


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



@app.route('/api/campgrounds/<id>')
def get_campground_by_id(id):
    """Display information for a campground"""
    campground_info = crud.get_campgrounds_by_id(id)

    return jsonify(campground_info)


@app.route('/api/map_data/<id>')
def get_map_data(id):
    """API for map data"""
    map_info = crud.get_map_by_id(id)

    return jsonify(map_info)


@app.route('/api/login', methods=["POST"])
def user_login():
    """Log in a user"""
    # userEmails = get_user_by_email()
    email = request.json["email"]
    password = request.json["password"]

    user = crud.get_user_by_email(email=email).first()
    
    
    if not user or user.password != password:
    #     return jsonify({"error": "Unauthorized"}), 401
    
    # if not user.password:
        return jsonify({"error": "Unauthorized"}), 401
    
    return jsonify({
        "id": user.id,
        "email": user.email
    })


# @app.route('/account/<user.id>')

# def user_page():


#     favorites = crud.get_favorites().all()

#     favorites_list = []
#     for favorite in favorites:
#        favorites_list.append(favorite.serialize())
#     return jsonify(favorites_list)






# 

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

    