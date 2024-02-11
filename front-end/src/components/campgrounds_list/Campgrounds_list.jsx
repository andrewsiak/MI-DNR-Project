import React from "react";
import { useEffect, useState } from "react";
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

// TODO - Favorite Campgrounds
// if user logged in
// fetch db for user favorites
// if favorite found
// populate star next to line item
// favoriting/unfavoriting will be handled in campground details

const Campground_list = ({ allCampgrounds }) => {
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
              borderColor: "black"
            }}
          >
            <Button
              style={{
                backgroundColor: "#333D29",
                opacity: ".8",
                color: "white",
                borderColor: "#FFFCE2"
              }}
              className="inputFont w-100"
              name={campgroundData.name}
              id={campgroundData.campground_id}
              onClick={(e) => {
                allCampgrounds(e.target.id);
                changeButton(e.target.name);
                handleClose();
              }}
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

