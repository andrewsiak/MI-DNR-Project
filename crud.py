"""CRUD operations."""

from model import db, User, Location, Review, Wishlist, Map_data

def get_locations():
    """Return all location."""

    return Location.query.all()