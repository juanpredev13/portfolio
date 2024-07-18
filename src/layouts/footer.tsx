import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faXTwitter, faDiscord } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__left">
          <div className="footer__contact">
            {/* <h2 className="footer__description subtitle">Get In Touch</h2> */}
            <a href="mailto:elias@elias-dev.ml" className="footer__email">
              prendas52@gmail.com
            </a>
            <a href="tel:+506 83067400">+506 83067400</a>
          </div>
        </div>
        {/* <div className="footer__center flex flex-col items-center justify-center">
          <p className="footer__text text-white">If you’d like to know more about my work or process feel free to get in touch.</p>
        </div> */}
        <div className="footer__right flex flex-col items-end">
          <div className="footer__media-icons flex space-x-4">
            <a href="https://github.com" className="footer__media-icon hover:text-white">
              <FontAwesomeIcon icon={faGithub} size="2x" />
            </a>
            <a href="https://twitter.com" className="footer__media-icon hover:text-white">
              <FontAwesomeIcon icon={faXTwitter} size="2x" />
            </a>
            <a href="https://discord.com" className="footer__media-icon hover:text-white">
              <FontAwesomeIcon icon={faDiscord} size="2x" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
