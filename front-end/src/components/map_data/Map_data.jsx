// import React from "react";
// import { useEffect, useState } from 'react'
// import "./map_data.css";
// import Container from 'react-bootstrap/Container';
// import { ReactDOM } from "react-dom";
// import { BrowserRouter as Router, Routes, Route, Link, } from 'react-router-dom';



// const StateParks = () => {
//   const [allStatParks, setAllStateParks] = useState(null);
//   useEffect(() => {
//     fetch("api/map_data", {
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

