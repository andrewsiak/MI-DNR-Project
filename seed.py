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
    park_data = json.loads(f.read())


parks_in_db = []
for park in park_data:
    park_name, district = (
        park["park_name"],
        park["district"]
    )
    db_park = crud.create_park(park_name, district)
    parks_in_db.append(db_park)



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