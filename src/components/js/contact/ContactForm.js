import "../../css/FormStyle.css";

import React from "react";

export const ContactForm = () => {
  return (
    <div className="form">
      <form>
        <label>Votre nom</label>
        <input type="text"></input>
        <label>Email</label>
        <input type="email"></input>
        <label>Sujet</label>
        <input type="text"></input>
        <label>Message</label>
        <textarea rows="6" placeholder="Entrez votre texte"></textarea>
        <button className="btn">Envoyer</button>
      </form>
    </div>
  );
};
