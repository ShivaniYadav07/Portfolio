import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Project from "./Project";
import Particle from "../Particle";
import amaala from "../../Assets/Project/amaala 2.png";
import textutils from "../../Assets/Project/textutils.PNG";
import bg7 from "../../Assets/Project/bg7.png";
import bct from "../../Assets/Project/bct.png";
import mngmnt from "../../Assets/Project/mngmnt.png";
import portfolio from "../../Assets/Project/portfolio.png";
import renting from "../../Assets/Project/go4renting.png"

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <Project             
            imgPath={portfolio}
              isBlog={false}
              title="Personal-Portfolio"
              description="
              A personal portfolio website built using React and various libraries is a powerful and dynamic platform for showcasing my skills, projects, and accomplishments."
              ghLink="https://github.com/ShivaniYadav07"
              demoLink="https://www.shivaniyadav.online/"
            />
          </Col>
          <Col md={4} className="project-card">
            <Project             
            imgPath={amaala}
              isBlog={false}
              title="AmaalaGroup"
              description="AMAALA GROUP construction website made with HTML, CSS, JavaScript.JavaScript can add interactivity to the website, allowing visitors to engage with the content and providing a more immersive experience.PHP can provide server-side functionality for the website."
              ghLink="https://github.com/ShivaniYadav07"
              demoLink="https://www.amaalagroup.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <Project
              imgPath={textutils}
              isBlog={false}
              title="TextUtils"
              description="The Textutils app made with ReactJS is a web application that offers various text manipulation features. Users can input text into a text area and utilize different tools to modify and analyze the text."
              ghLink="https://github.com/ShivaniYadav07/TextUtils-REACT"
              // demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <Project
               imgPath={bg7}
              isBlog={false}
              title="NewsApp"
              description="
              The NewsApp made with ReactJS and Fetch API is a web application that fetches and displays the latest news articles from a news API. It provides users with up-to-date news information on various topics from reliable news sources."
              ghLink="https://github.com/ShivaniYadav07/NewsApp"
              // demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <Project
               imgPath={bct}
              isBlog={false}
              title="Breezestone C&T"
              description="BreezeStone Construction and Technology is a web application built using JavaScript that offers innovative solutions and services in the construction industry. The application combines construction management with enhance efficiency, and improve project outcomes. "
              ghLink="https://github.com/ShivaniYadav07"
              demoLink="https://breezestone.shivaniyadav.online/"
            />
          </Col>
          <Col md={4} className="project-card">
            <Project
               imgPath={mngmnt}
              isBlog={false}
              title="Contact-Management-App"
              description="This is a contact management app built using ReactJS, JavaScript, TailwindCSS, React Router v6, and Redux. The app includes a dashboard with charts and maps that display COVID-19 data for different countries. API's used to show the data."
              ghLink="https://github.com/ShivaniYadav07"
              demoLink="https://project.shivaniyadav.online/"
            />
          </Col>
          <Col md={4} className="project-card">
            <Project
               imgPath={renting}
              isBlog={false}
              title="Go4Renting-Service"
              description="Go4Renting's innovative approach powered by React and PHP is setting new standards for rental services, making life more convenient for users and providers alike.With its intuitive interface, real-time capabilities, and secure transactions, G04Renting is redefining the way people rent, making it easier than ever to find and secure the items they need."
              ghLink="https://github.com/ShivaniYadav07"
              demoLink="https://go4renting.com/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;