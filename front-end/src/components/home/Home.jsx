import React, { useState, useEffect } from "react";
import "./home.css";
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';




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

const Campground = () => {
  const [campground, setCampground] = useState(null);
  useEffect(() => {
    fetch("api/campgrounds", {
      method: "GET",
      // headers: {
      //   "Key": "your-api-key",
      //   "Host": "something.com",
      // },
    })
      .then((response) => response.json())
      .then((campgroundData) => {
        setCampground(campgroundData[0]);
        console.log(campgroundData);
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <Container>
    <div>
      <h2>Show Something!</h2>
      {campground && <p>{campground}</p>}
    </div>
    </Container>
  );
}
export default Campground;



// const Home = () =>{
//     return (

//       <Container>
//         <div>Welcome to Michigan!</div>

//         <Row>
//             <Image src="./images/lake-image.jpeg" fluid />
//         </Row>
//       </Container>
//     );
//   }

// export default Home
