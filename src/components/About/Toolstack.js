import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiCodepen,
  SiBootstrap,
  SiReplit,
  SiJsfiddle,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      
      <Col xs={4} md={2} className="tech-icons">
        <SiJsfiddle />
      </Col> 
      <Col xs={4} md={2} className="tech-icons">
        <SiCodepen />
      </Col> 
      <Col xs={4} md={2} className="tech-icons">
        <SiBootstrap />
      </Col> 
      <Col xs={4} md={2} className="tech-icons">
        <SiReplit />
      </Col> 

    </Row>
  );
}

export default Toolstack;