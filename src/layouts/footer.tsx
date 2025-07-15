"use client"; 
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faXTwitter, faDiscord, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  const [isOpen, setIsOpen] = useState(true);

 
  const toggleFooter = () => {
    setIsOpen(!isOpen);
  };

  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__left">
          <div className="footer__contact">
            <a href="mailto:juanprendas@juanpre.dev" className="footer__email">
              juanprendas@juanpre.dev
            </a>
            <a href="tel:+50660691996">+506 60691996</a>
          </div>
        </div>

        {isOpen && ( // Mostrar u ocultar el bloque de redes sociales
          <div className="footer__right flex flex-col items-end">
            <div className="footer__media-icons flex space-x-4">
              <a
                href="https://github.com/juanpredev13" // Reemplaza con tu URL real de GitHub
                className="footer__media-icon hover:text-white"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faGithub} size="2x" />
              </a>
              <a
                href="https://x.com/juanpredev"
                className="footer__media-icon hover:text-white"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faXTwitter} size="2x" />
              </a>
              <a
                href="https://discord.gg/dfZ6XrgeuT" // Reemplaza con tu URL real de Discord
                className="footer__media-icon hover:text-white"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faDiscord} size="2x" />
              </a>
              <a
                href="https://www.linkedin.com/in/juan-pre-dev/" 
                className="footer__media-icon hover:text-white"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faLinkedin} size="2x" />
              </a>
            </div>
          </div>
        )}
      </div>
    </footer>
  );
};

export default Footer;
