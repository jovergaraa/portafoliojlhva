import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function Home2() {
  const [showToast, setShowToast] = useState(false);

  const copyEmailToClipboard = async () => {
    try {
      await navigator.clipboard.writeText('joseluisvergaraallende@gmail.com');
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000); // Ocultar después de 3 segundos
    } catch (err) {
      console.error('Error al copiar email: ', err);
      // Fallback para navegadores que no soportan clipboard API
      const textArea = document.createElement('textarea');
      textArea.value = 'joseluisvergaraallende@gmail.com';
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000);
    }
  };

  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
             Sobre mi
            </h1>
            <p className="home-about-body">
             Recientemente egresado de Duoc UC, con una gran pasión por la tecnología y el desarrollo de software. He trabajado en proyectos de desarrollo web y móvil, y tengo una gran habilidad para resolver problemas y trabajar en equipo.
              <br />
              <br />He trabajado en proyectos tanto de frontend y de backend, con lenguajes como javascript, python y con frameworks como react, django, flask, entre otros.
      
              <br />
              <br />
              Actualmente estoy en busca de un primer trabajo como desarrollador, para poder demostrar mis habilidades y seguir creciendo tanto profesionalmente como personalmente.
  
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>Contactame por estos medios</h1>
          
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/jovergaraa"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/jose-luis-vergara-allende-334835224"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons" style={{ position: 'relative' }}>
                {/* Toast Notification arriba del botón */}
                {showToast && (
                  <div style={{
                    position: 'absolute',
                    bottom: '50px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    backgroundColor: '#4CAF50',
                    color: 'white',
                    padding: '10px 15px',
                    borderRadius: '5px',
                    boxShadow: '0 4px 8px rgba(0,0,0,0.3)',
                    zIndex: 1000,
                    fontSize: '14px',
                    whiteSpace: 'nowrap',
                    animation: 'slideDown 0.3s ease-out'
                  }}>
                    ✅ Email copiado!
                  </div>
                )}
                <button
                  onClick={copyEmailToClipboard}
                  className="icon-colour home-social-icons"
                  style={{
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    padding: 0
                  }}
                >
                  <MdEmail />
                </button>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>

      <style jsx>{`
        @keyframes slideDown {
          from {
            transform: translateX(-50%) translateY(-10px);
            opacity: 0;
          }
          to {
            transform: translateX(-50%) translateY(0);
            opacity: 1;
          }
        }
      `}</style>
    </Container>
  );
}
export default Home2;
