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

with open("data/campground.json") as c:
    campgrund_info = json.loads(c.read())

    features = campgrund_info["features"]



campgrounds_in_db = []
for campground_feature in features:
    attributes = campground_feature["attributes"]
    county, name, main_phone, addr, city, zip, latitude, longitude = (
        attributes["County"],
        attributes["Name"],
        attributes["MainPhone"],
        attributes["Addr1"],
        attributes["City"],
        attributes["Zip"],
        attributes["Latitude"],
        attributes["Longitude"],
    )

    db_campground = crud.create_campground(county, name, main_phone, addr, city, zip, latitude, longitude)
    campgrounds_in_db.append(db_campground)
    
model.db.session.add_all(campgrounds_in_db)
model.db.session.commit()   
    


with open("data/arcgis.json") as f:
    map_info = json.loads(f.read())

    features = map_info["features"]
    
maps_in_db = []
for map_feature in features:
    attributes = map_feature["attributes"]
    geometry = map_feature["geometry"]
    object_id, acres, district, facility, shape_area, shape_length, lat, lng = (
        attributes["OBJECTID"],
        attributes["ACRES"],
        attributes["DISTRICT"],
        attributes["FACILITY"],
        attributes["Shape__Area"],
        attributes["Shape__Length"],
        geometry["rings"][0][0][0],
        geometry["rings"][0][0][1]
    )

# note about nested lists/arrays logic
    # # create variable to find geometry dictionary
    # geometry = map_feature["geometry"]
    # rings = geometry["rings"]
    # ring1 = rings[0]
    # point1 = ring1[0]
    # lat1 = point1[0]
    # lng1 = point1[1]

    # # geometry["rings"][ringIdx][pointIdx][0 = lat, 1 = lng]
    # lat = geometry["rings"][0][0][0]
    # lng = geometry["rings"][0][0][1]


    db_map = crud.create_map(object_id, acres, district, facility, shape_area, shape_length, lat, lng)
    maps_in_db.append(db_map)


model.db.session.add_all(maps_in_db)
model.db.session.commit()


# Create 10 users
for n in range(10):
    # username = f"testusername{n}"
    email = f"user{n}@test.com" 
    password = "test"

    user = crud.create_user(email, password)
    model.db.session.add(user)



