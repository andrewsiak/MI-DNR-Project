"""Models for MI DNR Project app."""
from flask_sqlalchemy import SQLAlchemy
import json

db = SQLAlchemy()

class User(db.Model):
    """A User"""
    
    __tablename__ = "users"

    id = db.Column(db.Integer, autoincrement=True, primary_key=True )
    # username = db.Column(db.String, unique=True)
    email = db.Column(db.String, unique=True)
    password = db.Column(db.String)

    # review = db.relationship("Review", back_populates="user")
    # wishlist = db.relationship("Wishlist", back_populates="user")


    def __repr__(self):
        return f"<User user_id={self.user_id} email={self.email}>"
    
    
class Campground(db.Model):
    """A Campground"""

    __tablename__ = "campgrounds"

    campground_id = db.Column(db.Integer, autoincrement=True, primary_key=True )
    county = db.Column(db.String)
    name = db.Column(db.String)
    main_phone = db.Column(db.String)
    addr = db.Column(db.String)
    city = db.Column(db.String)
    zip = db.Column(db.String)
    latitude = db.Column(db.Float)
    longitude = db.Column(db.Float) 



    def __repr__(self):
        return f"<Campground campground_id={self.campground_id}>"


        # Need to return object as json serializable

    def serialize(self):
        return {"campground_id": self.campground_id,
                "county": self.county,
                "name": self.name}

class Map_Data(db.Model):
    """A map"""

    __tablename__ = "map_datas"

    map_data_id = db.Column(db.Integer, autoincrement=True, primary_key=True )
    object_id = db.Column(db.Integer)
    acres = db.Column(db.Integer)
    district = db.Column(db.String)
    facility = db.Column(db.String)
    shape_area = db.Column(db.Float)
    shape_length = db.Column(db.Float)
    lat = db.Column(db.Float)
    lng = db.Column(db.Float)


    def __repr__(self):
        return f"<Map_Data map_data_id={self.map_data_id}>"
    

    
class Review(db.Model):
    """A review for a campground or park"""

    __tablename__ = "reviews"

    review_id = db.Column(db.Integer, autoincrement=True, primary_key=True )
    # user_id = db.Column(db.Integer, db.ForeignKey("user.user_id"))
    # campground_id = db.Column(db.Integer, db.ForeignKey("campground.campground_id"))
    score = db.Column(db.Integer)

    # campground = db.relationship("Campground", back_populates="review")
    # user = db.relationship("User", back_populates="review")

    def __repr__(self):
        return f"<Review review_id={self.review_id}>"


class Wishlist(db.Model):
    """user's campground wishlist"""
    __tablename__ = "wishlists"

    wishlist_id = db.Column(db.Integer, autoincrement=True, primary_key=True )
    # user_id = db.Column(db.Integer, db.ForeignKey("wishlist.wishlist_id"))
    # campground_id = db.Column(db.Integer, db.ForeignKey("campground.campground_id"))

    # campground = db.relationship("Campground", back_populates="wishlist")
    # user = db.relationship("User", back_populates="wishlist")

    def __repr__(self):
        return f"<Wishlist wishlist_id={self.wishlist_id}>"
    

def connect_to_db(flask_app, db_uri="postgresql:///dnrproject", echo=True):
    flask_app.config["SQLALCHEMY_DATABASE_URI"] = db_uri
    flask_app.config["SQLALCHEMY_ECHO"] = echo
    flask_app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False

    db.app = flask_app
    db.init_app(flask_app)

    print("Connected to the db!")


if __name__ == "__main__":
    from server import app

    # Call connect_to_db(app, echo=False) if your program output gets
    # too annoying; this will tell SQLAlchemy not to print out every
    # query it executes.

    connect_to_db(app)
