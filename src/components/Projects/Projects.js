import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import chatify from "../../Assets/Projects/codeEditor.png";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Gyan Sagar Public School"
              description="It is a multiple page school website with some other future scopes like HRMS, Student Corners."
              ghLink="https://github.com/sarangraulkar/schoolwebsite"
              demoLink="http://gyansagarpublicschool.in/"
            />
          </Col>

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
