import { Container, Card, Button } from "react-bootstrap";
import { useState, useEffect, prop } from "react";
import Campground_list from "../campgrounds_list/Campgrounds_list";
import Account_page from "../user_account/Account_page";
import Favorites_By_User from "../favorites/favorites";
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

const Campground_details = ({ campground }) => {
  const campgroundName = campground.name;
  const campgroundCounty = campground.county;

  // console.log(campground);

  if (campground !== null) {
    const [favorite, setFavorite] = useState([]);

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

    // const handleClick = (e) => {
    //   e.preventDefault();
    //   console.log("hello");
    // };
    // console.log(campground);

    return (
      <div
        // className="campground-information-panels"
        style={{
          backgroundColor: "#333D29",
          opacity: ".8",
          color: "#FFFCE2",
          borderColor: "#FFFCE2",
          padding: 12,
          fontSize: 12,
        }}
      >
        <h3 style={{ color: "#FFFCE2" }}>Campground Information</h3>

        <div>Location</div>
        <div
          style={{
            paddingBottom: 20,
            paddingLeft: 12,
            color: "white",
            fontSize: 15,
          }}
        >
          {campgroundName}
        </div>
        <div>County </div>
        <div
          style={{
            paddingBottom: 20,
            paddingLeft: 12,
            color: "white",
            fontSize: 15,
          }}
        >
          {campgroundCounty}
        </div>

        <Button
          onClick={Favorites_By_User.handleFavorite}
          id="submit-button"
          className="button"
        >
          Save for Later {Favorites_By_User.campgroundFavorites}
        </Button>
        <Button
          onClick={Favorites_By_User.handleUnfavorite}
          id="submit-button"
          className="button"
        >
          Remove {Favorites_By_User.campgroundFavorites}
        </Button>
      </div>
    );
  } else {
    return (
      <div>
        <h2>Pick a campground!</h2>
      </div>
    );
  }
};

export default Campground_details;
