import React from "react";

type FooterProps = {};

const Footer: React.FC<FooterProps> = () => {
  return (
    <footer>
      <a href="mailto:klayaclarke@gmail.com" className="footer-link">
        klayaclarke@gmail.com
      </a>
      <ul className="social-list">
        <li className="social-list__item">
          <a href="" className="social-list__link">
            GitHub
          </a>
        </li>
        <li className="social-list__item">
          <a href="" className="social-list__link">
            LinkedIn
          </a>
        </li>
      </ul>
    </footer>
  );
};
export default Footer;
