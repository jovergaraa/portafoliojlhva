import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Proyectos en los que he trabajado
        </h1>
  
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="IGN TATTO"
              description="Un proyecto que busca desarrollar una solución informática personalizada para el mundo del tatuaje, con el objetivo de mejorar la gestión de citas, clientes, diseños, inventario y facturación. Además de brindar una experiencia a amantes de los tatuajes generando vínculos e interacciones gracias a una app móvil y una plataforma web "
              ghLink="https://github.com/distrad/Capstone"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Muebles Gerardo"
              description="El proyecto consiste en desarrollar un sitio web para una empresa ficticia de muebles establecida desde hace varios años. La solución propuesta es la creación de un sitio web que permita a la empresa mostrar su catálogo de muebles, ofrecer la posibilidad de compras en línea, gestionar pedidos personalizados y ofrecer servicios de reparación. "
              ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
              demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Music Pro"
              description="Proyecto que se centra en el desarrollo de una plataforma informática de gestión de productos para Una empresa de Instrumentos musicales, que permita a sus clientes acceder a una amplia selección de instrumentos y accesorios musicales, a fin de realizar compras de manera fácil y eficiente. "
              ghLink="https://github.com/soumyajit4419/Editor.io"
              demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
