import React from "react";
import "../global.css";

const Header = () => {
  return (
    <header className="header">
      <h1>Meu Portfólio</h1>
      <nav>
        <ul>
          <li><a href="#about">Sobre</a></li>
          <li><a href="#projects">Projetos</a></li>
          <li><a href="#contact">Contato</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
