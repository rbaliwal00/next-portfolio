import Image from "next/image";
import React from "react";
import Instagram from "../../icons/Logos/instagram-fill.svg";
import LinkedIn from "../../icons/Logos/linkedin-fill.svg";
import Github from "../../icons/Logos/github-fill.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__find-me">find me in:</div>
      <div className="footer__item">
        <a
          target="_blank"
          href="https://www.linkedin.com/in/rajan-baliwal-8b6a5ab2/"
          rel="noopener noreferrer"
        >
          <Image src={LinkedIn} alt="github" width={26} height={26} />
        </a>
      </div>
      <div className="footer__item footer__instagram">
        <a
          target="_blank"
          href="https://www.instagram.com/rajanbaliwal"
          rel="noopener noreferrer"
        >
          <Image src={Instagram} alt="instagram" width={26} height={26} />
        </a>
      </div>
      <div></div>
      <a
        target="_blank"
        href="https://github.com/rbaliwal00"
        rel="noopener noreferrer"
      >
        <div className="footer__item">
          <span className="footer__word">@rbaliwal00</span>
          <Image src={Github} alt="github" width={28} height={28} />
        </div>
      </a>
    </footer>
  );
};

export default Footer;
