import os
import json

import crud
import model
import server

model.connect_to_db(server.app)

try:
    os.system("dropdb dnrproject")
except:
    print("no dnrproject db found")

os.system("createdb dnrproject")

model.db.create_all()



with open("/Users/Masedium/src/Project - MI DNR/data/arcgis.json") as f:
    map_info = json.loads(f.read())

    features = map_info["features"]


maps_in_db = []
for feature in features:
    attributes = feature["attributes"]
    object_id, acres, district, facility, shape_area, shape_length = (
        attributes["OBJECTID"],
        attributes["ACRES"],
        attributes["DISTRICT"],
        attributes["FACILITY"],
        attributes["Shape__Area"],
        attributes["Shape__Length"],
    )


    # create variable to find geometry dictionary
    geometry = feature["geometry"]
    rings = geometry["rings"]
    ring1 = rings[0]
    point1 = ring1[0]
    lat1 = point1[0]
    lng1 = point1[1]

    # geometry["rings"][ringIdx][pointIdx][0 = lat, 1 = lng]
    lat = geometry["rings"][0][0][0]
    lng = geometry["rings"][0][0][1]


    db_map = crud.create_map(object_id, acres, district, facility, shape_area, shape_length)
    
    maps_in_db.append(db_map)

model.db.session.add_all(maps_in_db)
model.db.session.commit()

    # "features": [
    #     {
    #         "attributes": {
    #             "OBJECTID": 3,
    #             "ACRES": 311.141471,
    #             "DISTRICT": "Plainwell",
    #             "FACILITY": "Warren Woods State Park",
    #             "Shape__Area": 1259149.8968277,
    #             "Shape__Length": 4959.54938203082


# Type

# Division

# County

# Name

# Label

# RecSrchTyp

# UnitID

# MainPhone

# Addr1

# City

# Zip

# Latitude

# Longitude

# Edit_Name

# Edit_Date

# Link_Id



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