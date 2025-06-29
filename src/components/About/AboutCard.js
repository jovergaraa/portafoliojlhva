import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
           Hola mucho gusto en conocerte, soy <span className="purple">Jose Vergara </span>
            de <span className="purple">santiago, chile.</span>
            <br />
            Actualmente estoy buscando mi primer trabajo como desarrollador.
            <br />
            Recientemente he terminado mi carrera de Ingenieria en Informatica en Duoc UC
            <br />
            <br />
            Aparte del desarrollo y la tecnologia estos son algunos de mis hobbies:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> PowerLifting
            </li>
            <li className="about-activity">
              <ImPointRight /> Jugar videojuegos
            </li>
            <li className="about-activity">
              <ImPointRight /> Descubrir nueva musica
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
