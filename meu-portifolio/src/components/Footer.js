import React from "react";
import "../global.css";

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Meu Portfólio. Todos os direitos reservados.</p>
    </footer>
  );
};

export default Footer;
