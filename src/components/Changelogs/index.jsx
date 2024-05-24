
import React from "react";
import { ContactForm } from "../../components";
import "./style.css";
const Changelog = [
  {
    id: 1,
    title: "0.0.1",
    content: "Conteúdo do blog sobre marketing...",
  },
  // Adicione mais posts de blog conforme necessário
];

const Changelogs = (handleSendMessage) => {

  return (
    <div className="changelogs-container">
      <h2>Changelogs</h2>
      <div className="changelogs-list">
        <ul>
          {Changelog.map((log, index) => (
            <li key={index}>{log.title}: {log.content}</li>
          ))}
        </ul>
      </div>
      <h2>Envie nos uma mensagem</h2>

      <ContactForm onMessageSent={handleSendMessage} text={"Digite aqui..."} url={'https://example.com/api/contact'} />
    </div>
  );
};export default Changelogs;
