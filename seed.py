import os
import json

import crud
import model
import server

os.system("dropdb parks")


os.system("createdb parks")

model.connect_to_db(server.app)
model.db.create_all()

with open("/Users/Masedium/src/Project - MI DNR/data/arcgis.json") as f:
    map_info = json.loads(f.read())

    map_info = map_info["features"]

maps_in_db = []
for attribute in map_info:
    objectid, acres, district, facility, shape_area, shape_length = (
        attribute["objectid"],
        attribute["acres"],
        attribute["district"],
        attribute["facility"],
        attribute["shape_area"],
        attribute["shape_length"],
    )
    db_map = crud.create_map(objectid, acres, district, facility, shape_area, shape_length)
    maps_in_db.append(db_map)


    # "features": [
    #     {
    #         "attributes": {
    #             "OBJECTID": 3,
    #             "ACRES": 311.141471,
    #             "DISTRICT": "Plainwell",
    #             "FACILITY": "Warren Woods State Park",
    #             "Shape__Area": 1259149.8968277,
    #             "Shape__Length": 4959.54938203082




# movies_in_db = []
# for movie in movie_data:
#     title, overview, poster_path = (
#         movie["title"],
#         movie["overview"],
#         movie["poster_path"],
#     )
#     release_date = datetime.strptime(movie["release_date"], "%Y-%m-%d")

#     db_movie = crud.create_movie(title, overview, release_date, poster_path)
#     movies_in_db.append(db_movie)

# model.db.session.add_all(movies_in_db)
# model.db.session.commit()