import React, { useEffect, useState } from "react";
import "./campgrounds_list.css";
import Container from "react-bootstrap/Container";
import { ReactDOM } from "react-dom";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useParams,
} from "react-router-dom";
import Campground_body from "../campground_body/Campground_body";
import Col from "react-bootstrap/Col";
import { ListGroup, Button } from "react-bootstrap";
import { propTypes } from "react-bootstrap/esm/Image";

// TODO - Favorite Campgrounds
// if user logged in
// fetch db for user favorites
// if favorite found
// populate star next to line item
// favoriting/unfavoriting will be handled in campground details

const Campground_list = ({}) => {
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
  console.log(allCampgrounds)
  console.log(allCampgrounds.campground_id)
  

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
            id={campgroundData.campground_id}
            name={campgroundData.name}
            lat={campgroundData.lat}
            lng={campgroundData.lng}
            onClick={(e) => {
              // alert(e.target.id);
              console.log(e.target.id);
              console.log(e.target.name);
              console.log(e.target.lat);
              console.log(e.target.lng);

              // changeButton(e.target.name);
              // handleClose();
            }}
            
            // style={{
            //   backgroundColor: "black",
            //   opacity: ".9",
            //   color: "white",
            //   borderColor: "black"
            // }}
          >
            <Button
                style={{
                  backgroundColor: "#333D29",
                  opacity: ".8",
                  color: "white",
                  borderColor: "#FFFCE2",
                }}
                className="inputFont w-100"
             
              // onClick={(e) => {
              //   // alert(e.target.id);
              //   console.log(e.target.id);
              //   console.log(e.target.name);
              //   console.log(e.target.lat);
              //   console.log(e.target.lng);

              //   // changeButton(e.target.name);
              //   // handleClose();
              // }}
            >
              {campgroundData.name}
            </Button>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Container>
  );
};

export default Campground_list;
