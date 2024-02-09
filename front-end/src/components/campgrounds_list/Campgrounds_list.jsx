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
import { ListGroup } from "react-bootstrap";

// TODO - Favorite Campgrounds
// if user logged in
// fetch db for user favorites
// if favorite found
// populate star next to line item
// favoriting/unfavoriting will be handled in campground details

const Campground_list = ({ allCampgrounds }) => {
  return (
    // <Container className="bg-dark text-white opacity-75"> 
    <Container style={{backgroundColor: "#212529", opacity: "85%", color:"#FFFCE2"}} > 
    
      <h2 style={{color:"#FFFCE2"}}>Find a Campground</h2>
      {(allCampgrounds ?? []).map((campgroundData) => {
        return (
            <ListGroup className="list-group" >
              {/* <Link to={`/campgrounds/${campgroundData.campground_id}`}> */}
                {campgroundData.name}
              {/* </Link> */}
            </ListGroup>
        );
      })}
    </Container>
  );
};



export default Campground_list;
{/* <ListGroup>
  {(allCampgrounds ?? []).map(campgroundData => (
    <ListGroup.Item className="modal-bg">
    <Button style={{ 
      backgroundColor: "black", 
      opacity: ".8", 
      color: "white", 
      borderColor: "red" }} 
      className="inputFont w-100" 
      name={campgroundData.name} 
      value={campgroundData.value} 
      onClick={e => { genre(e.target.value); 
        changeButton(e.target.name); 
        handleClose() }}>
        Classics
        </Button></ListGroup.Item>
  ))}
</ListGroup> */}