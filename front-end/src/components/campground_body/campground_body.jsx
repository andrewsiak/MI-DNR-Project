import Campground_details from "../campground_details/Campground_details";
import Campground_list from "../campgrounds_list/Campgrounds_list";
import { useState, useEffect } from "react";
import CampgroundMapView from "../campground_map_view/Map_view";
import { Col, Container, Row, Card } from "react-bootstrap";
import { Route } from "react-router-dom";

const Campground_body = () => {
  const [campground, setCampground] = useState({});
  console.log(campground);
  const campgroundLat = campground.lat;
  const campgroundLng = campground.lng;
  const campgroundZoom = null;

  // console.log(campground);
  return (
    <div>
      <Container>
        <Row>
          <Col xs={4}>
            <Campground_list
              // allCampgrounds={allCampgrounds}
              setCampgroundFn={setCampground}
            />
          </Col>

          <Col
            lg={5}
            style={{
              height: "vh",
              backgroundColor: "#414833",
              paddingTop: 10,
              paddingBottom: 10,
              opacity: 0.9,
            }}
          >
            {/* add default values below */}
            <CampgroundMapView
              campgroundLat={campgroundLat || 45.001}
              campgroundLng={campgroundLng || -85.498}
              campgroundZoom={campgroundZoom || 6}
            />
          </Col>
          <Col xs={3}>
            <Campground_details campground={campground} />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Campground_body;
