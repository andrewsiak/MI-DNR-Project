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

const Campground_list = ({ allCampgrounds }) => {
  return (
    <Container>
        <h2>Find a Campground</h2>
        {(allCampgrounds ?? []).map((campgroundData) => {
          return (
            
            <li key={campgroundData.campground_id}>
                <Link to={`/campgrounds/${campgroundData.campground_id}`}>
                  {campgroundData.name}
                </Link>
              </li>
         );
        })}
    </Container>
  );
};

export default Campground_list;
