// import React from "react";
// import { useEffect, useState } from 'react'
// import "./state_parks.css";
// import Container from 'react-bootstrap/Container';
// import { Navbar, Nav, NavLink, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
// import { ReactDOM } from "react-dom";
// import { BrowserRouter as Router, Routes, Route, Link, } from 'react-router-dom';



// const StateParks = () => {
//   const [allStatParks, setAllStateParks] = useState(null);
//   useEffect(() => {
//     fetch("api/state_parks", {
//       method: "GET",
//       // headers: {
//       //   "Key": "your-api-key",
//       //   "Host": "something.com",
//       // },
//     })
//       .then((response) => {
//         console.log(response);
//         return response.json()
//       })
//       .then((campgroundData) => {
//         setAllStateParks(campgroundData);
//         console.log(campgroundData);
//       })
//       .catch((error) => console.log(error));
//   }, []);


//   return (
//     <Container>
//       <div>
//         <h2>Find a Campground</h2>
//         <ol className="list-group">
//             {(allStatParks ?? []).map((campgroundData) => {

//                 return(
//                     <li className="list-group-item" key={campgroundData.campground_id}> {campgroundData.name}</li>
//                 )
//             })}
//         </ol>

//       </div>
//     </Container>
//   );
// }
// export default StateParks;

