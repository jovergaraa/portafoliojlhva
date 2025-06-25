import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
} from "react-icons/di";
import {
  SiRedis,
  SiFirebase,
  SiNextdotjs,
  SiSolidity,
  SiPostgresql,
  SiVisualstudiocode,
  SiFigma,
  SiAdobexd,
  SiHtml5,
  SiCss3,
  SiDjango,
  SiFlask,
  SiExpress,
  SiBootstrap,
  SiIonic,
} from "react-icons/si";
import { TbBrandGolang } from "react-icons/tb";

function Techstack() {
  return (
    <div style={{ paddingTop: "20px" }}>
      {/* Lenguajes de Programación */}
      <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        <Col md={12}>
          <h3 style={{ textAlign: "center", color: "white", marginBottom: "40px" }}>
            <span className="purple">Lenguajes de Programación</span>
          </h3>
        </Col>
        <Col xs={4} md={2} className="tech-icons tooltip-container">
          <DiJavascript1 title="JavaScript" />
        </Col>
        <Col xs={4} md={2} className="tech-icons tooltip-container">
          <DiPython title="Python" />
        </Col>
        <Col xs={4} md={2} className="tech-icons tooltip-container">
          <DiJava title="Java" />
        </Col>
        <Col xs={4} md={2} className="tech-icons tooltip-container">
          <SiHtml5 title="HTML5" />
        </Col>
        <Col xs={4} md={2} className="tech-icons tooltip-container">
          <SiCss3 title="CSS3" />
        </Col>
      </Row>

      {/* Frameworks y Librerías */}
      <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        <Col md={12}>
          <h3 style={{ textAlign: "center", color: "white", marginBottom: "40px" }}>
            <span className="purple">Frameworks y Librerías</span>
          </h3>
        </Col>
        <Col xs={4} md={2} className="tech-icons tooltip-container">
          <DiReact title="React" />
        </Col>
        <Col xs={4} md={2} className="tech-icons tooltip-container">
          <DiNodejs title="Node.js" />
        </Col>
        <Col xs={4} md={2} className="tech-icons tooltip-container">
          <SiExpress title="Express.js" />
        </Col>
        <Col xs={4} md={2} className="tech-icons tooltip-container">
          <SiBootstrap title="Bootstrap" />
        </Col>
        <Col xs={4} md={2} className="tech-icons tooltip-container">
          <SiIonic title="Ionic" />
        </Col>
        <Col xs={4} md={2} className="tech-icons tooltip-container">
          <SiDjango title="Django" />
        </Col>
        <Col xs={4} md={2} className="tech-icons tooltip-container">
          <SiFlask title="Flask" />
        </Col>
      </Row>

      {/* Bases de Datos */}
      <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        <Col md={12}>
          <h3 style={{ textAlign: "center", color: "white", marginBottom: "40px" }}>
            <span className="purple">Bases de Datos</span>
          </h3>
        </Col>
        <Col xs={4} md={2} className="tech-icons tooltip-container">
          <SiPostgresql title="PostgreSQL" />
        </Col>
        <Col xs={4} md={2} className="tech-icons tooltip-container">
          <SiFirebase title="Firebase" />
        </Col>
      </Row>

      {/* Herramientas de Desarrollo */}
      <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        <Col md={12}>
          <h3 style={{ textAlign: "center", color: "white", marginBottom: "40px" }}>
            <span className="purple">Herramientas de Desarrollo</span>
          </h3>
        </Col>
        <Col xs={4} md={2} className="tech-icons tooltip-container">
          <DiGit title="Git" />
        </Col>
        <Col xs={4} md={2} className="tech-icons tooltip-container">
          <SiVisualstudiocode title="VS Code" />
        </Col>
      </Row>

      {/* Herramientas de Diseño */}
      <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        <Col md={12}>
          <h3 style={{ textAlign: "center", color: "white", marginBottom: "40px" }}>
            <span className="purple">Herramientas de Diseño</span>
          </h3>
        </Col>
        <Col xs={4} md={2} className="tech-icons tooltip-container">
          <SiFigma title="Figma" />
        </Col>
      </Row>
    </div>
  );
}

export default Techstack;
