import React, { useState, useEffect } from "react";
import "./login_form.css";
import Container from "react-bootstrap/Container";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function LoginForm({ userId, setUserId }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const userLogin = { email, password };

// stretch goal: if logged in - redirect to Your Account page
// stretch goal: create log out component and include that on account page and navbar

    fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
    .then((response) => {
      if (response.ok) {
        response.json()
    .then((user) => {
          setUserId(user.id);
          localStorage.setItem("userId", user.id);

          // onLogin(user);
          // console.log(user.id);
          navigate("/");
        });
      }
    });
  };

  return (
    <div
      className="color-overlay 
    
    "
    >
      <Form className="box" onSubmit={handleSubmit}>
        <Form.Label>
          <h3>Please Sign In</h3>
        </Form.Label>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            className="input"
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
            className="input"
            value={password}
            type="password"
            placeholder="********"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Button
          // variant="success"
          id="submit-button"
          className="button"
          type="submit"
          // style={{
          //   backgroundColor: "#333D29",
          //   opacity: ".8",
          //   color: "white",
          //   borderColor: "#FFFCE2",
          // }}
        >
          Log In
        </Button>
      </Form>
    </div>
  );
}

export default LoginForm;
