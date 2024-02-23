import React from "react";
import { useEffect, useState } from "react";
import "./nav_bar.css";
import Container from "react-bootstrap/Container";
import {
  Navbar,
  Nav,
  NavLink,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import { ReactDOM } from "react-dom";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import About from "../about/About";
import Home from "../home/Home";
import Account_page from "../user_account/Account_page";
import LoginForm from "../login_form/Login_form";
import Campground from "../campgrounds_list/Campgrounds_list";

const Nav_bar = () => {

  return (
    <div>
      <Navbar bg="dark" expand="lg" variant={"dark"}>
        <Container>
          <Navbar.Brand href="/">Michigan Camping</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link as={Link} to={"/"}>
                Home
              </Nav.Link>

              <Nav.Link as={Link} to={"about"}>
                About
              </Nav.Link>
              <Nav.Link as={Link} to={"login"}>
                Login
              </Nav.Link>
              <Nav.Link as={Link} to={"campgrounds"}>
                Campgrounds
              </Nav.Link>
              <Nav.Link as={Link} to={"account"}>
                Your Account
              </Nav.Link>

              
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Nav_bar;


