import React from "react";
import { useEffect, useState } from 'react'
import "./campgrounds_list.css";
import Container from 'react-bootstrap/Container';
import { ReactDOM } from "react-dom";
import { BrowserRouter as Router, Routes, Route, Link, useParams} from 'react-router-dom';
import Campground_body from "../campground_body/Campground_body";
import Col from "react-bootstrap/Col";




const Campground_list = ({allCampgrounds}) => {

  return (
    <Container>
      <div>
        <h2>Find a Campground</h2>
        <ol className="list-group">
            {(allCampgrounds ?? []).map((campgroundData) => {

                return(
                    <li key={campgroundData.campground_id}>
                       <Link to={`/campgrounds/${campgroundData.campground_id}`}>{campgroundData.name} ({campgroundData.lat}, {campgroundData.lng})</Link> 
                    </li>
                )
            })}
        </ol>

      </div>
    </Container>
  );
}


export default Campground_list;

