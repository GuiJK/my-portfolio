import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import junqueflix from "../../Assets/Projects/junqueflix.png";
import pokedex from "../../Assets/Projects/pokedex.png";
import Xmen from "../../Assets/Projects/Xmen.png";

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
              imgPath={Xmen}
              isBlog={false}
              title="X-MEN"
              description="developed for studies, with javascript, html and css"
              ghLink="https://github.com/GuiJK/x-men"
              demoLink="https://guijk.github.io/x-men/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
