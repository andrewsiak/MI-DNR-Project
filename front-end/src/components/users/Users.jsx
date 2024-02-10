import Campground_details from "../campground_details/Campground_details";
import Campground_list from "../campgrounds_list/Campgrounds_list";
import { Col, Container, Row } from "react-bootstrap";
import { Route } from "react-router-dom";
import { useState, useEffect } from "react";


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
      <Container fluid style={{ paddingLeft: 0, paddingRight: 0 }}>
        <Row>
          <Col >
            <Campground_list allCampgrounds={allCampgrounds} />
          </Col>
          <Col xs={3}>
            <Campground_details allCampgrounds={allCampgrounds} />
          </Col>
          <Col md="auto">
            {/* <GoogleMapView /> */}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Users;
