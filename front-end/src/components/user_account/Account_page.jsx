import Campground_details from "../campground_details/Campground_details";
import "./account_page.css";
import Campground_list from "../campgrounds_list/Campgrounds_list";
import { Col, Container, Row, Button, Card } from "react-bootstrap";
import { Route, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import LoginForm from "../login_form/Login_form";
import Favorites_By_User from "../favorites/favorites";

const Account_page = ({}) => {
  let loggedIn = localStorage.getItem("userId");
  console.log(loggedIn);
  if (loggedIn === null) {
    return (
      <div className="div-card-default">
        <Card className="card-default">
          <br></br>
          <h2 className="centered">Please log in</h2>
          <Link to="/login">
            <Button id="submit-button" className="button-home-styling">
              Log In
            </Button>
          </Link>
          <br></br>
        </Card>
      </div>
    );
  } else {
    const [userAccountInfo, setUserAccountInfo] = useState([]);
    // useEffect(() => {
    //   fetch("/account", {
    //     method: "GET",
    //   })
    //     .then((response) => {
    //       console.log(response);
    //       return response.json();
    //     })
    //     .then((userData) => {
    //       setAllCampgrounds(userData);
    //       console.log(userData);
    //     })
    //     .catch((error) => console.log(error));
    // }, []);

    return (
      <div className="div-card-default">
        <Card className="card-default">
          <div>
            <h2>Welcome back!</h2>

            {/* <div>favorites here</div> */}

            {/* <Favorites_By_User                 
              > </Favorites_By_User> */}
          </div>
          <br></br>
        </Card>
      </div>
    );
  }
};

export default Account_page;
