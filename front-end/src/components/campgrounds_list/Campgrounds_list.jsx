import React, { useEffect, useState } from "react";
import "./campgrounds_list.css";
import Container from "react-bootstrap/Container";
import { ReactDOM, state } from "react-dom";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useParams,
} from "react-router-dom";
import Campground_body from "../campground_body/Campground_body";
import { Col } from "react-bootstrap";
import { ListGroup, Button } from "react-bootstrap";
import Favorites_By_User from "../favorites/favorites";

// TODO - Favorite Campgrounds
// if user logged in
// fetch db for user favorites
// if favorite found
// populate star next to line item
// favoriting/unfavoriting will be handled in campground details

const Campground_list = ({ setCampgroundFn }) => {
  const [allCampgrounds, setAllCampgrounds] = useState([]);

  useEffect(() => {
    fetch("api/campgrounds", {
      method: "GET",
    })
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((campgroundData) => {
        setAllCampgrounds(campgroundData);
        console.log(campgroundData);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <Container
      // style={{
      //   backgroundColor: "black",
      //   opacity: ".8",
      // }}
      style={{ backgroundColor: "black", opacity: "85%", color: "#FFFCE2" }}
    >
      <h2 style={{ color: "#FFFCE2" }}>Find a Campground</h2>

      <ListGroup>
        {(allCampgrounds ?? []).map((campgroundData) => (
          <ListGroup.Item
            key={campgroundData.campground_id}
            style={{
              backgroundColor: "black",
              opacity: ".9",
              color: "white",
              borderColor: "black",
            }}
          >
            <Link>
              <Button
                onClick={(e) => {
                  setCampgroundFn(campgroundData);
                }}
                className="inputFont w-100"
                style={{
                  backgroundColor: "#333D29",
                  fontSize: 12,
                  opacity: ".8",
                  color: "white",
                  borderColor: "#FFFCE2",
                }}
              >
                {campgroundData.name}
                {/* {Favorites_By_User.favorited && ( */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-star-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                </svg>
                {/* )} */}
              </Button>
            </Link>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Container>
  );
};

export default Campground_list;
