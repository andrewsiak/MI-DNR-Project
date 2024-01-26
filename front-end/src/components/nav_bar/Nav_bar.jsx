import React from "react";
import { useEffect, useState } from 'react'
import "./nav_bar.css";
import Container from 'react-bootstrap/Container';
import { Navbar, Nav, NavLink, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import { ReactDOM } from "react-dom";
import { BrowserRouter as Router, Routes, Route, Link,  } from 'react-router-dom';
import About from "../about/About";
import Home from "../home/Home";
import Users from "../users/Users";
// import LoginForm from "../login/Login_form";



const Nav_bar = () =>{
  // const [active, setActive] = useState("FirstCard");

    return(
      <Router>
        <div> 

        <Navbar bg="dark" expand="lg" variant={"dark"}>
          <Container>
            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
\                <Nav.Link as={Link} to={"/home"} >Home</Nav.Link>

                <Nav.Link as={Link} to={"about"}>About</Nav.Link>
                {/* <Nav.Link as={Link} to={"login"}>Login</Nav.Link> */}

                <NavDropdown title="Menu" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#account">Your Account</NavDropdown.Item>
                  <NavDropdown.Item href="#favorites">
                    Favorites
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Filler
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        </div>

      
        <div>
        <Routes>
          <Route path="about" element={<About/>}>
          </Route>
          <Route path="/home" element={<Home/>}>
          </Route>
          <Route path="/users" element={<Users/>}>
          </Route>
          {/* <Route path="/login" element={<LoginForm/>}>
          </Route> */}
        
        </Routes>
        </div>
        </Router> 

)}

export default Nav_bar

// <nav>
// <button onClick={() => setActive("FirstCard")}>One</button>
// <button onClick={() => setActive("SecondCard")}>Two</button>
// <button onClick={() => setActive("ThirdCard")}>Three</button>
// </nav>
// <div>
// {active === "FirstCard" && <Nav_bar title ="1" />}
// {active === "SecondCard" && <Nav_bar title ="2" />}
// {active === "ThirdCard" && <Nav_bar title ="3" />}

// </div>