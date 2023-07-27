import React from "react";
import StarParticles from "../Particle";
import { Container, Row,Col, Card } from "react-bootstrap";
import 'mdb-react-ui-kit/dist/css/mdb.min.css';


function Testimonial() {
    return (
        <section>
            <Container fluid className="about-section">
<StarParticles />
<Container>
<Row style={{ justifyContent: "center", padding: "10px" }}>

<Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
    <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              What Client <strong className="purple">Says</strong>
            </h1>

    </Col>
    </Row>
    <Row>
    <Card className="project-card-view" style={{ width: '22rem',marginRight: '22px'}}>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
        <Card.Text style={{ textAlign: "justify" }}>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>
    <Card className="project-card-view" style={{ width: '22rem', marginRight: '22px' }}>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
        <Card.Text style={{ textAlign: "justify" }}>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>
    <Card className="project-card-view" style={{ width: '22rem', marginRight: '22px' }}>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
        <Card.Text style={{ textAlign: "justify" }}>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>
    </Row>
    </Container>

</Container>
</section>
    )};

    export default Testimonial;