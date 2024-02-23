import React, { Component } from "react";
import { Card, Col, Container, Button } from "react-bootstrap";
import "./about.css";


export default class About extends Component {
  render() {
    return (
      <div className="div-about-default">
        <Card className="about-default">
          <Card.Header className="about-header">By Andrew Siak</Card.Header>
          <Card.Body className="about-body">
            This website is a project for Hackbright. A test bed to implement
            several languages and techniques learned throughout the course.{" "}
          </Card.Body>
        </Card>
      </div>
    );
  }
}
