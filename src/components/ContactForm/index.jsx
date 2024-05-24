import React, { useState } from "react";
import "./style.css";

const ContactForm = ({ content, url, onMessageSent }) => {
  const [inputValue, setInputValue] = useState('');
  const [error, setError] = useState(null);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
    setError(null); // Reset error when input changes
  };

  const handleSend = async () => {
    const formData = JSON.stringify({
      "formularioid": "contactform",
      "content": inputValue
    });

    try {
      const response = await fetch(url + '/client/api/v1/contactform/create', {
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
        onMessageSent(content[0].messageSentSuccess);
      } else {
        const errorMessage = await response.text();
        setError(errorMessage);
      }
    } catch (error) {
      console.error("Erro:", error);
      setError(content[0].errorMessage);
    }
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <input
          id="content"
          type="text"
          placeholder={content[0].typehere}
          value={inputValue}
          onChange={handleInputChange}
          style={{ marginBottom: '10px' }}
        />
        <button onClick={handleSend}>{content[0].personalInfoButton}</button>
      </div>
      {error && <p style={{ color: 'red', fontSize: '12px' }}>{content[0].errorMessage}</p>}
    </div>
  );
};

export default ContactForm;
