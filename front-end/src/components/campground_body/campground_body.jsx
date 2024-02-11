import Campground_details from "../campground_details/Campground_details";
import Campground_list from "../campgrounds_list/Campgrounds_list";
import { useState, useEffect } from "react";
import GoogleMapView from "../map_view/Map_view";
import { Col, Container, Row, Card } from "react-bootstrap";
import { Route } from "react-router-dom";

const Campground_body = () => {
  const [allCampgrounds, setAllCampgrounds] = useState([]);
  useEffect(() => {
    fetch("api/campgrounds", {
      method: "GET",
    })
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((campgroundData) => {
        setAllCampgrounds(campgroundData);
        console.log(campgroundData);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <Container>
        <Row>
          <Col xs={4}>
            <Campground_list allCampgrounds={allCampgrounds} />
          </Col>
          <Col xs={3}>
            <Campground_details allCampgrounds={allCampgrounds} />
          </Col>
          <Col md={5}               style={{
                backgroundColor: "#A4AC86"}}>
                  Map PlaceHolder
            {/* <GoogleMapView /> */}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Campground_body;
