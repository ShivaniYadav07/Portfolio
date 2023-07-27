import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Shivani Yadav </span>
            from <span className="purple"> Haridwar, India.</span>
            <br /> I am graduated in b.tech.
            <br />
            Additionally, I am currently employed as an intern at AttainITsolutions.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Reading
            </li>
            <li className="about-activity">
              <ImPointRight /> Learning everyday
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Menifesting things to achive goals!"{" "}
          </p>
          <footer className="blockquote-footer"> Shivani</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;