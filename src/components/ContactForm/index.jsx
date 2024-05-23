import React, { useState } from "react";
import "./style.css";

const ContactForm = ({ text, url, onMessageSent }) => {
  const [inputValue, setInputValue] = useState('');
  const [error, setError] = useState(null);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
    setError(null); // Reset error when input changes
  };

  const handleSend = async () => {
    const content = inputValue; // Using state value directly

    const formData = JSON.stringify({
      "formularioid": "contactform",
      "content": content
    });

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Device-Secret': localStorage.token,
          'Credentials': 'include'
        },
        body: formData
      });

      if (response.ok) {
        // Notify parent component that message was sent successfully
        onMessageSent("Mensagem enviada com sucesso!");
      } else {
        const errorMessage = await response.text();
        setError(errorMessage);
      }
    } catch (error) {
      console.error("Erro:", error);
      setError("Erro ao enviar mensagem.");
    }
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <input
          id="content"
          type="text"
          placeholder={text}
          value={inputValue}
          onChange={handleInputChange}
          style={{ marginBottom: '10px' }}
        />
        <button onClick={handleSend}>Enviar</button>
      </div>
      {error && <p style={{ color: 'red', fontSize: '12px' }}>Erro: {error}</p>}

    </div>
  );
};

export default ContactForm;
