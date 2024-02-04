import { Container } from "react-bootstrap";
import { useState, useEffect } from "react";
import Campground_list from "../campgrounds_list/Campgrounds_list";

import React from "react";
import { ReactDOM } from "react-dom";
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';



const Campground_details = ({allCampgrounds}) => {
  let location = useLocation();
  let currentParkId = -1;

  if (location.pathname.split('/').length > 2) {
    currentParkId = location.pathname.split('/')[2]
  }

  if (allCampgrounds.length > 0 && currentParkId !== -1) {
    console.log("here is what you have to work with!")
    console.log(currentParkId)
    console.log(allCampgrounds)
    // loop through all the allcampgrounds and find one whose ID matches currentParkId 
    // display this parks information in what we return 
    // please display the lat / lng and park name 
  } else {
    return <div>Please select a park from the list!</div>
  }
  


    // const [currentCampground, setCurrentCampground] = useState([]);
    // useEffect(
    // //     () => {
    // //   fetch("api/campgrounds", {
    // //     method: "GET",
    // //     // headers: {
    // //     //   "Key": "your-api-key",
    // //     //   "Host": "something.com",
    // //     // },
    // //   })
    // //     .then((response) => {
    // //       console.log(response);
    // //       return response.json()
    // //     })
    // //     .then((campgroundData) => {
    // //       setAllCampgrounds(campgroundData);
    // //       console.log(campgroundData);
    // //     })
    // //     .catch((error) => console.log(error));
    // // }, 
    // []);
  

    return (
        <div>
          <h2>This is the selected Campground</h2>
        </div>
    );
  }
  
  export default Campground_details;