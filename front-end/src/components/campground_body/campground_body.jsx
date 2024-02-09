import Campground_details from "../campground_details/Campground_details";
import Campground_list from "../campgrounds_list/Campgrounds_list";
import { useState, useEffect } from "react";
import GoogleMapView from "../map_view/Map_view"



const Campground_body = () =>{
  const [allCampgrounds, setAllCampgrounds] = useState([]);
  useEffect(() => {
    fetch("api/campgrounds", {
      method: "GET",

    })
      .then((response) => {
        console.log(response);
        return response.json()
      })
      .then((campgroundData) => {
        setAllCampgrounds(campgroundData);
        console.log(campgroundData);
      })
      .catch((error) => console.log(error));
  }, []);
  
    return(
      <div>
        <Campground_list allCampgrounds={allCampgrounds}/>
        <Campground_details allCampgrounds={allCampgrounds}/>
        <GoogleMapView/>
      </div>

    )
};

export default Campground_body;