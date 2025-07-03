import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  const [showToast, setShowToast] = useState(false);

  const copyEmailToClipboard = async () => {
    try {
      await navigator.clipboard.writeText('joseluisvergaraallende@gmail.com');
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000);
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
    <>
      <Container fluid className="footer">
        <Row>
          <Col md="4" className="footer-copywright">
          </Col>
          <Col md="4" className="footer-copywright">
          </Col>
          <Col md="4" className="footer-body">
            <ul className="footer-icons">
              <li className="social-icons">
                <a
                  href="https://github.com/jovergaraa"
                  style={{ color: "white" }}
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/jose-luis-vergara-allende-334835224"
                  style={{ color: "white" }}
                  target="_blank" 
                  rel="noopener noreferrer"
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
                  style={{
                    color: "white",
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
    </>
  );
}

export default Footer;
