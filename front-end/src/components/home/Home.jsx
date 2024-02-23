import React, { useState, useEffect } from "react";
import "./home.css";
import { Card, Col, Container, Button } from "react-bootstrap";
import { Route, Routes, Link } from "react-router-dom";
import Campground_body from "../campground_body/Campground_body";
import Account_page from "../user_account/Account_page";
import LoginForm from "../login_form/Login_form";

const Home = () => {
  return (
    <div className="div-card-default">
      <Card className="card-default">
        <Card.Header className="card-head">Welcome to Michigan!</Card.Header>
        <Card.Body className="card-body">
          Find your perfect campground in Michigan!
        </Card.Body>
        <Link as={Link} to={"campgrounds"}>
          <Button id="submit-button" className="button-home-styling">
            Find a campground
          </Button>
        </Link>
        <Card.Body className="card-body">or please log in</Card.Body>
        <Link to="/login">
          <Button id="submit-button" className="button-home-styling">
            Log In
          </Button>
        </Link>
        <br></br>
      </Card>
    </div>
  );
};

export default Home;

