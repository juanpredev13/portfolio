// components/Footer.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faTwitter, faDiscord } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__left ">
          <div className="footer__contact">
            <span className="footer__title">Juan Prendas</span>
            <a href="mailto:elias@elias-dev.ml" className="footer__email">
            <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
            juan@juanpre.dev
          </a>
          </div>
          <span className="footer__description">Web designer and front-end developer</span>
        </div>
        <div className="footer__right flex flex-col items-end">
          <span className="footer__media-title text-lg font-bold text-white">Media</span>
          <div className="footer__media-icons flex space-x-4">
            <a href="https://github.com" className="footer__media-icon hover:text-white">
              <FontAwesomeIcon icon={faGithub} size="2x" />
            </a>
            <a href="https://twitter.com" className="footer__media-icon hover:text-white">
              <FontAwesomeIcon icon={faTwitter} size="2x" />
            </a>
            <a href="https://discord.com" className="footer__media-icon hover:text-white">
              <FontAwesomeIcon icon={faDiscord} size="2x" />
            </a>
          </div>
        </div>
      </div>
      <div className="footer__copyright text-center mt-4">
        <span>© Copyright 2022. Made by Juanpredev</span>
      </div>
    </footer>
  );
};

export default Footer;
