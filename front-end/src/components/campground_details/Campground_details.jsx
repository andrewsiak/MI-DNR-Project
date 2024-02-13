import { Container, Card } from "react-bootstrap";
import { useState, useEffect, prop } from "react";
import Campground_list from "../campgrounds_list/Campgrounds_list";
import Account_page from "../user_account/Account_page";
import React from "react";
import { ReactDOM } from "react-dom";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation,
  useParams,
} from "react-router-dom";

// allow for users to mark and unmark as favorites and store in db
// fetch post to server/db

const Campground_details = ({}) => {
  // const [allCampgrounds, setAllCampgrounds] = useState([]);
  // useEffect(() => {
  //   fetch("api/campgrounds", {
  //     method: "GET",
  //   })
  //     .then((response) => {
  //       console.log(response);
  //       return response.json();
  //     })
  //     .then((campgroundData) => {
  //       setAllCampgrounds(campgroundData);
  //       // console.log(campgroundData);
  //     })
  //     .catch((error) => console.log(error));
  // }, []);

  const handleClick = (e) => {
    e.preventDefault();
    console.log('hello');
  
  }

  // let { id } = useParams();
  // need to destructure props to display name id
  // once Favorites component is complete, import favorites to display in this component
  // console.log(id);
  // let currentParkId = -1;

  // if (location.pathname.split('/').length > 2) {
  //   currentParkId = location.pathname.split('/')[2]
  // }

  // if (allCampgrounds.length > 0 && currentParkId !== -1) {
  //   console.log("here is what you have to work with!");
  //   console.log(currentParkId);
  //   console.log(allCampgrounds);

    // loop through all the allcampgrounds and find one whose ID matches currentParkId
    //   let length = allCampgrounds.length;
    //   for (let i=0; i<=length; i++) {
    //   if(currentParkId === i) {
    //     return Campground_details[i].map((name) => {
    //       return <div>{name} test</div>
    //     })
    //   }
    // }


    //   return ()

    // display this parks information in what we return
    // please display the lat / lng and park name  <Card.Link href={/book/${id}}>{title}</Card.Link>
  // } else {
    return (
      
      <div>
        <div>Please select a park from the list!</div>
        <Card>Card Text {}</Card>
      </div>
    );

};

export default Campground_details;

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
