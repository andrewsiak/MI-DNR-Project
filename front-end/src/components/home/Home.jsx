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
        <Card.Body className="card-body">Find your perfect campground in Michigan!</Card.Body>
        <Link as={Link} to={"campgrounds"}>
          <Button className="button-home-styling">Find a campground</Button>
        </Link>
        <br></br>
      </Card>
    </div>
  );
};

export default Home;

//  will need to use something like this later

// const [loading, setLoading] = React.useState(false);

// React.useEffect(() => {
//     setLoading(true);
//     fetch('api/campground.json')
//       .then((response) => response.json())
//       .then((campgroundData) => {
//         setCampgrounds(campgroundData);
//         setLoading(false);
//       });
//   }, []);

// const Campground = () => {
//   const [a_campground, setCampground] = useState(null);
//   useEffect(() => {
//     fetch("api/campgrounds", {
//       method: "GET",
//       // headers: {
//       //   "Key": "your-api-key",
//       //   "Host": "something.com",
//       // },
//     })
//       .then((response) => response.json())
//       .then((campgroundData) => {
//         setCampground(campgroundData[0]);
//         console.log(campgroundData);
//       })
//       .catch((error) => console.log(error));
//   }, []);

//   return (
//     <Container>
//     <div>
//       <h2>Show Something!</h2>
// {/*
//         version 1: */}
//         {/* {a_campground.map((campground) => (
//           <div className="campground" key={campground_id}>
//             <h3> {campground.text}</h3>
//           </div>
//         ))} */}

//         {/* version 2: */}
//       {/* {campground && <p>{campground}</p>} */}
//     </div>
//     </Container>
//   );
// }
// export default Campground;

// const Home = () =>{
//     return (

//     );
//   }

// export default Home
