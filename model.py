"""Models for MI DNR Project app."""
from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
    """A User"""
    
    __tablename__ = "users"

    user_id = db.Column(db.Integer, autoincrement=True, primary_key=True )
    user_name = db.Column(db.String, unique=True)
    fname = db.Column(db.String)
    lname = db.Column(db.String)
    phone = db.Column(db.String)
    email = db.Column(db.String, unique=True)
    password = db.Column(db.String)

    review = db.relationship("Review", back_populates="user")
    wishlist = db.relationship("Wishlist", back_populates="user")


    def __repr__(self):
        return f"<User user_id={self.user_id}"
    
    
class Location(db.Model):
    """A location"""

    __tablename__ = "locations"

    location_id = db.Column(db.Integer, autoincrement=True, primary_key=True )
    map_data_id = db.Column(db.Integer, db.ForeignKey("map_data.map_data_id"))
    address = db.Column(db.String)
    city = db.Column(db.String)
    zipcode = db.Column(db.Integer)
    location_name = db.Column(db.String)
    location_type = db.Column(db.String)
    location_url = db.Column(db.String)
    description = db.Column(db.Text)


    review = db.relationship("Review", back_populates="location")
    wishlist = db.relationship("Wishlist", back_populates="location")


    def __repr__(self):
        return f"<Location location_id={self.location_id}"
    

class Map_data(db.Model):
    """A map"""

    __tablename__ = "map_datas"

    map_data_id = db.Column(db.Integer, autoincrement=True, primary_key=True )
    lat = db.Column(db.String)
    lng = db.Column(db.String)


    def __repr__(self):
        return f"<Map_data map_data_id={self.map_data_id}"
    

    
class Review(db.Model):
    """A review for a location"""

    __tablename__ = "reviews"

    review_id = db.Column(db.Integer, autoincrement=True, primary_key=True )
    user_id = db.Column(db.Integer, db.ForeignKey("user.user_id"))
    location_id = db.Column(db.Integer, db.ForeignKey("location.location_id"))
    score = db.Column(db.Integer)

    location = db.relationship("Location", back_populates="review")
    user = db.relationship("User", back_populates="review")

    def __repr__(self):
        return f"<Review review_id={self.review_id}"


class Wishlist(db.Model):
    """user's location wishlist"""
    __tablename__ = "wishlists"

    wishlist_id = db.Column(db.Integer, autoincrement=True, primary_key=True )
    user_id = db.Column(db.Integer, db.ForeignKey("wishlist.wishlist_id"))
    location_id = db.Column(db.Integer, db.ForeignKey("location.location_id"))

    location = db.relationship("Location", back_populates="wishlist")
    user = db.relationship("User", back_populates="wishlist")

    def __repr__(self):
        return f"<Wishlist wishlist_id={self.wishlist_id}"
    

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
