import React from "react";
import { useEffect, useState } from 'react'
import "./nav_bar.css";
import Container from 'react-bootstrap/Container';
import { Navbar, Nav, NavLink, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import { ReactDOM } from "react-dom";
import { BrowserRouter as Router, Routes, Route, Link,  } from 'react-router-dom';
import About from "../about/About";
import Home from "../home/Home";
import Users from "../users/Users";
import LoginForm from "../login_form/Login_form";
import Campground from "../campgrounds_list/Campgrounds_list";



const Nav_bar = () =>{
  // const [active, setActive] = useState("FirstCard");

    return(
        <div> 

        <Navbar bg="dark" expand="lg" variant={"dark"}>
          <Container>
            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
\                <Nav.Link as={Link} to={"/home"} >Home</Nav.Link>

                <Nav.Link as={Link} to={"about"}>About</Nav.Link>
                <Nav.Link as={Link} to={"login"}>Login</Nav.Link>
                <Nav.Link as={Link} to={"campgrounds"}>Campgrounds</Nav.Link>


                {/* <NavDropdown title="Menu" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#account">Your Account</NavDropdown.Item>
                  <NavDropdown.Item href="#favorites">
                    Favorites
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Filler
                  </NavDropdown.Item>
                </NavDropdown> */}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        </div>

      


)}

export default Nav_bar

