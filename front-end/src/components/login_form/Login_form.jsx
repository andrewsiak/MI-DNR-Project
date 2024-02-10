import React, { useState, useEffect } from "react";
import "./login_form.css";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

// const LoginForm = (props) => {
//   const [email, setEmail] = useState("")
//   const [password, setPassword] = useState("")
//   const [emailError, setEmailError] = useState("")
//   const [passwordError, setPasswordError] = useState("")
//   useEffect(() => {
//     fetch("api/login", {
//       method: "POST",

//     })
//       .then((response) => {
//         console.log(response);
//         return response.json()
//       })
//       .then((userData) => {
//         setEmail(userData);
//         console.log(userData);
//       })
//       .catch((error) => console.log(error));
//   }, []);

function LoginForm({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((user) => {
          // onLogin(user);
          console.log(user.id);
          navigate("/account/" + user.id);
        });
      }
    });
  };
  return (
    <div className="color-overlay d-flex justify-content-center align-items-center">
      <Form className="login-form" onSubmit={handleSubmit}>
        <Form.Label>
          <h3>Please Sign In</h3>{" "}
        </Form.Label>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            value={email}
            type="email"
            placeholder="enter your email"
            name="email"
            onChange={(e) => setEmail(e.target.value)}

          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            value={password}
            type="password"
            placeholder="********"
            name="password"
            onChange={(e) => setPassword(e.target.value)}

          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Log In
        </Button>
      </Form>
    </div>
  );
}

export default LoginForm;

//   <div className="auth-form-container">
//   <h2>Login</h2>
//   <form className="login-form" onSubmit={handleSubmit}>
//       <label htmlFor="email">email</label>
//       <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="youremail@gmail.com" id="email" name="email" />
//       <label htmlFor="password">password</label>
//       <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="********" id="password" name="password" />
//       <button type="submit">Log In</button>
//   </form>
//   {/* <button className="link-btn" onClick={() => props.onFormSwitch('register')}>Don't have an account? Register here.</button> */}
// </div>

//<Form>
//   <Form.Group className="mb-3" controlId="formBasicEmail">
//     <Form.Label>Email address</Form.Label>
//     <Form.Control type="email" placeholder="Enter email" />
//   </Form.Group>

//   <Form.Group className="mb-3" controlId="formBasicPassword">
//     <Form.Label>Password</Form.Label>
//     <Form.Control type="password" placeholder="Password" />
//   </Form.Group>
//   <Form.Group className="mb-3" controlId="formBasicCheckbox">
//     <Form.Check type="checkbox" label="Check me out" />
//   </Form.Group>
//   <Button variant="primary" type="submit">
//     Submit
//   </Button>
// </Form>; 
