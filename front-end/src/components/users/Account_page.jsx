import Campground_details from "../campground_details/Campground_details";
import Campground_list from "../campgrounds_list/Campgrounds_list";
import { Col, Container, Row } from "react-bootstrap";
import { Route } from "react-router-dom";
import { useState, useEffect } from "react";
import LoginForm from "../login_form/Login_form";


const Users = () => {
  const [userAccountInfo, setUserAccountInfo] = useState([]);
  useEffect(() => {
    fetch("account/<user.id>", {
      method: "GET",
    })
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((userData) => {
        setAllCampgrounds(userData);
        console.log(userData);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      test
    </div>
  );
};

export default Users;
