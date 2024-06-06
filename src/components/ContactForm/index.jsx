import React, { useState } from "react";
import "./style.css";
import { Button } from "..";

const ContactForm = ({languageIndex, onClose, content, url, onMessageSent }) => {
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
          'Device-Secret': 'myjwtdevicesecret',
          'Credentials': 'include'
        },
        body: formData
      });

      if (response.ok) {
        // Notify parent component that message was sent successfully
        onMessageSent(content[languageIndex].messageSentSuccess);
      } else {
        const errorMessage = await response.text();
        setError(errorMessage);
        redirectToWhatsApp();
      }
    } catch (error) {
      console.error("Erro:", error);
      setError(content[languageIndex].errorMessage);
      redirectToWhatsApp();
    }
    onClose();
  };

  const redirectToWhatsApp = () => {
    const phone = "5561981594849";
    const baseUrl = `https://api.whatsapp.com/send?phone=${encodeURIComponent(phone)}`;
    const url = `${baseUrl}&text=${encodeURIComponent(inputValue)}`;

    window.open(url, '_blank');
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <input
          id="content"
          type="text"
          placeholder={content[languageIndex].typehere}
          value={inputValue}
          onChange={handleInputChange}
          style={{ marginBottom: '10px' }}
        />

        <Button onClick={handleSend} className="h-[36px] min-w-[92px] rounded-[18px] border border-solid border-green-400 bg-green-700 px-[15px] text-xs tracking-[0.50px] text-white-A700">
          {content[languageIndex].personalInfoButton}
        </Button>
      </div>
      {error && <p style={{ color: 'red', fontSize: '12px' }}>{content[languageIndex].errorMessage}</p>}
    </div>
  );
}

export default ContactForm;
