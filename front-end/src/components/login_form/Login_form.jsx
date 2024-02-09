import React, { useState, useEffect } from "react";
import "./login_form.css";
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { Form } from 'react-bootstrap';
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
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event)=> {
    event.preventDefault();
    fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ 
        "email": email, 
        "password": password 
      }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((user) => {
          onLogin(user);
          navigate("/");
        });
      }
    });
  }
  return (
    <div className="auth-form-container">
        <h2>Login</h2>
        <form className="login-form" onSubmit={handleSubmit}>
            <label htmlFor="email">email</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="youremail@gmail.com" id="email" name="email" />
            <label htmlFor="password">password</label>
            <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
            <button type="submit">Log In</button>
        </form>
        <button className="link-btn" onClick={() => props.onFormSwitch('register')}>Don't have an account? Register here.</button>
    </div>
)


  
  }
  
  export default LoginForm;

  //   return (
  //     <div className="color-overlay d-flex justify-content-center align-items-center">
  //     <Form className="rounded p-4 p-sm-3">
  //       <Form.Label><h3>Please Sign In</h3> </Form.Label>

  //       <Form.Group className="mb-3" controlId="formBasicEmail">
  //         <Form.Label>Email address</Form.Label>
  //         <Form.Control type="email" name="email" placeholder="Enter email" />
  //         <Form.Text className="text-muted">
  //           We'll never share your email with anyone else.
  //         </Form.Text>
  //       </Form.Group>
  
  //       <Form.Group className="mb-3" controlId="formBasicPassword">
  //         <Form.Label>Password</Form.Label>
  //         <Form.Control type="password" name= "password" placeholder="Password" />
  //       </Form.Group>
  //       {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
  //         <Form.Check type="checkbox" label="Check me" /> */}
  //       {/* </Form.Group> */}
  //       <Button variant="primary" type="submit">
  //         Submit
  //       </Button>
  //     </Form>
  //     </div>
  //   );