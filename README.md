

# Michigan Camping - My Hackbring Project
To help you find a campground in Michigan


**Recorded Demo: https://www.youtube.com/watch?v=igf2BBRflRo**


### Front End:
**Tech Used:** ReactJS, Vite, Bootstrap, Google Maps
    The website utilizes ReactJS and Boo When the campgrounds component is loaded, all the campground information is fetched, and then pass through as props within the child components. The navbar was used for easy navigation of the website using react-router.


### Server:
**Tech Used:** Flask, SQLAlchemy, PostgreSQL
    The Python server utilizes Flask URL routing to access the SQL data. The data for the campgrounds comes from Arcgis found here: https://gis-midnr.opendata.arcgis.com/datasets/a861dc3e767743d8be4c49d555848537_3/api 


### Take Aways ###
This project was created to learn how to use React, implement external APIs, manage data, and utilize several tools and languages, Boostrap, Flask, and HTML, Javascript, and Python. There were several lessons learned including: Passing not only props, but also functions to components, using <Router> in the top level component, fetching only once per component, and starting a basic understanding of the google maps API.


The next items to work on are an account registration page, adding encryption, improving the experience with google maps, and creating a way to mark and store favorite campgrounds


### Installation ###:
The Python server is run in a virtual env, installing requirements.txt
  ```sh
  pip3 install -r "requirements.txt" -g
  ```

The Front-End uses Vite and npm:
  ```sh
  npm install npm@latest -g
  ```


### Contact ###
Author: Andrew Siak
Email: andrewtsiak@gmail.com
Project Link: TBD
