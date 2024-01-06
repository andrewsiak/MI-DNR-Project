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
        return f"<User user_id={self.user_id}>"
    
    
class Park(db.Model):
    """A Park"""

    __tablename__ = "parks"

    park_id = db.Column(db.Integer, autoincrement=True, primary_key=True )
    # map_data_id = db.Column(db.Integer, db.ForeignKey("map_data.map_data_id"))
    address = db.Column(db.String)
    district = db.Column(db.String)
    park_name = db.Column(db.String)
    park_url = db.Column(db.String)
    description = db.Column(db.Text)


    review = db.relationship("Review", back_populates="park")
    wishlist = db.relationship("Wishlist", back_populates="park")


    def __repr__(self):
        return f"<Park park_id={self.park_id}>"


class Map_data(db.Model):
    """A map"""

    __tablename__ = "map_datas"

    map_data_id = db.Column(db.Integer, autoincrement=True, primary_key=True )
    district = db.Column(db.String)
    facility = db.Column(db.String)
    shape_area = db.Column(db.String)
    shape_length = db.Column(db.String)
    lat = db.Column(db.Float)
    lng = db.Column(db.Float)


    def __repr__(self):
        return f"<Map_data map_data_id={self.map_data_id}>"
    

    
class Review(db.Model):
    """A review for a park"""

    __tablename__ = "reviews"

    review_id = db.Column(db.Integer, autoincrement=True, primary_key=True )
    # user_id = db.Column(db.Integer, db.ForeignKey("user.user_id"))
    # park_id = db.Column(db.Integer, db.ForeignKey("park.park_id"))
    score = db.Column(db.Integer)

    park = db.relationship("Park", back_populates="review")
    user = db.relationship("User", back_populates="review")

    def __repr__(self):
        return f"<Review review_id={self.review_id}>"


class Wishlist(db.Model):
    """user's park wishlist"""
    __tablename__ = "wishlists"

    wishlist_id = db.Column(db.Integer, autoincrement=True, primary_key=True )
    # user_id = db.Column(db.Integer, db.ForeignKey("wishlist.wishlist_id"))
    # park_id = db.Column(db.Integer, db.ForeignKey("park.park_id"))

    park = db.relationship("Park", back_populates="wishlist")
    user = db.relationship("User", back_populates="wishlist")

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
