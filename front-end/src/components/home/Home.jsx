import React, { useState, useEffect } from "react";
import "./home.css";
import { Col, Container } from "react-bootstrap";
import { Route, Routes } from "react-router-dom";
import Campground_body from "../campground_body/Campground_body";
import Account_page from "../user_account/Account_page";
import LoginForm from "../login_form/Login_form";

const Home = () => {
  return (
    <Container>
      <div>Welcome to Michigan!</div>
      <Routes>
        <Route path="/campgrounds" element={<Campground_body />} />
        <Route path="/account" element={<Account_page />} />

        <Route path="/login" element={<LoginForm />} />
      </Routes>
      {/* <Row>
          <Image src="./images/lake-image.jpeg" fluid />
      </Row> */}
    </Container>
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
