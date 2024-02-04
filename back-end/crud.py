

"""CRUD operations."""

from model import db, User, Campground, Map_Data, Review, Favorite, Map_Data, connect_to_db


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


def create_campground(county, name, main_phone, addr, city, zip, latitude, longitude):
    """Create and return a new campground."""

    campground_info = Campground(
        county=county,
        name=name,
        main_phone=main_phone,
        addr=addr,
        city=city,
        zip=zip,
        latitude=latitude,
        longitude=longitude 
    )

    return campground_info


def get_campgrounds():
    """Return all campgrounds."""

    return Campground.query.all()


def get_campgrounds_by_id(campground_id):

    return Campground.query.get(campground_id)



def create_map(object_id, acres, district, facility, shape_area, shape_length, lat, lng):
    """Create and return a new map."""

    park_map = Map_Data(
        object_id=object_id,
        acres=acres,
        district=district,
        facility=facility,
        shape_area=shape_area,
        shape_length=shape_length,
        lat=lat,
        lng=lng
    )
    

    return park_map


def get_map():
    """Return all map_data."""

    return Map_Data.query.all()


def get_map_by_id(map_data_id):

    return Map_Data.query.get(map_data_id)


def create_review(score):
    review = Review(
        score=score
    )

    return review


def get_review():

    return Review.query.all()


def create_favorite(user_id):
    favorite = Favorite(
        user_id=user_id
    )

    return favorite


def get_favorite():

    return Favorite.query.all()


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


