import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
           Hola, mucho gusto en conocerte. Soy <span className="purple">José Vergara</span>
            de <span className="purple">Santiago, Chile.</span>
            <br />
            Actualmente, estoy buscando mi primer trabajo como desarrollador.
            <br />
            Recientemente, he terminado mi carrera de Ingeniería en Informática en Duoc UC
            <br />
    
            <br />
            Mis puntos fuertes son:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Desarrollo Web
            </li>
            <li className="about-activity">
              <ImPointRight /> Metodologías Agiles
            </li>
            <li className="about-activity">
              <ImPointRight /> Diseño de interfaces
            </li>
            <li className="about-activity">
              <ImPointRight /> Habilidades Blandas
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
