import React from "react";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { FaWhatsapp } from "react-icons/fa"; // 👈 adicionando o ícone
import "./global.css";

function App() {
  return (
    <div>
      <Header />
      <main>
        <About />
        <Projects />
        <Contact />

        {/* 👇 Botão do WhatsApp acima do Footer */}
        <div className="whatsapp-container">
        <a
  href="https://wa.me/5553984365541"
  target="_blank"
  rel="noopener noreferrer"
  className="whatsapp-float"
>
  <FaWhatsapp size={28} />
</a>
        </div>

        <Footer />
      </main>
    </div>
  );
}

export default App;
