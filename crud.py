

"""CRUD operations."""

from model import db, User, Park, Review, Wishlist, Map_data, connect_to_db


def create_user(email, password):
    """Create and return a new user."""

    user = User(email=email, password=password)

    return user


def get_users():
    """Return all users."""

    return User.query.all()


def get_user_by_id(user_id):
    """Return a user by primary key."""

    return User.query.get(user_id)


def get_user_by_email(email):
    """Return a user by email."""

    return User.query.filter(User.email == email).first()





def creat_park(objectid,facility, description, district, city, zipcode):
    """Create and return a new park."""

    park = Park(
        objectid=objectid,
        # facility=facility,
        # district=district,
        # city=city,
        # zipcode=zipcode,
        # description=description,
        # park_image=park_image,
    )


    # park_id = db.Column(db.Integer, autoincrement=True, primary_key=True )
    # map_data_id = db.Column(db.Integer, db.ForeignKey("map_data.map_data_id"))
    # address = db.Column(db.String)
    # city = db.Column(db.String)
    # zipcode = db.Column(db.Integer)
    # park_name = db.Column(db.String)
    # park_url = db.Column(db.String)
    # description = db.Column(db.Text)
    return park


def get_park():
    """Return all park."""

    return Park.query.all()



def get_park_by_id(park_id):

    return Park.query.get(park_id)






# def create_rating(user, movie, score):
#     """Create and return a new rating."""

#     rating = Rating(user=user, movie=movie, score=score)

#     return rating


# def update_rating(rating_id, new_score):
#     """ Update a rating given rating_id and the updated score. """
#     rating = Rating.query.get(rating_id)
#     rating.score = new_score

if __name__ == "__main__":
    from server import app

    connect_to_db(app)
