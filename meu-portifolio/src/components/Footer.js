import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import "../global.css";

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Meu Portfólio. Todos os direitos reservados.</p>

      <a
        href="https://wa.me/5553984365541"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-footer"
      >
      
      </a>
    </footer>
  );
};

export default Footer;
