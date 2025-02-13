import React, { useState } from "react";
import "../global.css";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Mensagem enviada por: ${formData.name}`);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="contact">
      <h2>Contato</h2>
      <form onSubmit={handleSubmit} className="contact-form">
        <input type="text" name="name" placeholder="Seu Nome" value={formData.name} onChange={handleChange} required />
        <input type="email" name="email" placeholder="Seu Email" value={formData.email} onChange={handleChange} required />
        <textarea name="message" placeholder="Sua Mensagem" value={formData.message} onChange={handleChange} required></textarea>
        <button type="submit">Enviar</button>
      </form>
    </section>
  );
};

export default Contact;
