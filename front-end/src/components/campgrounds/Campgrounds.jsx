import React from "react";
import { useEffect, useState } from 'react'
import "./campgrounds.css";
import Container from 'react-bootstrap/Container';
import { Navbar, Nav, NavLink, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import { ReactDOM } from "react-dom";
import { BrowserRouter as Router, Routes, Route, Link,  } from 'react-router-dom';


const Campground = () => {
    const [a_campground, setCampground] = useState(null);
    useEffect(() => {
      fetch("api/campgrounds", {
        method: "GET",
        // headers: {
        //   "Key": "your-api-key",
        //   "Host": "something.com",
        // },
      })
        .then((response) => response.json())
        .then((campgroundData) => {
          setCampground(campgroundData[0]);
          console.log(campgroundData);
        })
        .catch((error) => console.log(error));
    }, []);
  
    
    return (
      <Container>
      <div>
        <h2>Show Something!</h2>
        <ol className="list-group list-group-numbered">
            {a_campground.map((data) => {
                return(
                    <li className="list-group-item" key={campgroundData.id}> {campgroundData.name}</li>
                )
            })}
        </ol>

      </div>
      </Container>
    );
  }
  export default Campground;