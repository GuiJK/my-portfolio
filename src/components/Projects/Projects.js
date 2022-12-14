import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import junqueflix from "../../Assets/Projects/junqueflix.png";
import pokedex from "../../Assets/Projects/pokedex.png";
import divino from "../../Assets/Projects/Divino-Tacho.png";

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
            <ProjectCard
              imgPath={junqueflix}
              isBlog={false}
              title="Junqueflix"
              description="In this project I created the Netflix home that plays all trailers."
              ghLink="https://github.com/GuiJK/junqueflix.git"
              demoLink="https://junqueflix.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pokedex}
              isBlog={false}
              title="Pokedex"
              description="A pokedex of the Pokemon cartoon that I made using CSS and HTML."
              ghLink="https://github.com/GuiJK/css.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={divino}
              isBlog={false}
              title="Divino-Tacho"
              description="Designing a Website for a Product"
              ghLink="https://github.com/GuiJK/divino-tacho.git"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
