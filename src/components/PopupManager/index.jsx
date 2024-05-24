import React, { useState, useEffect } from "react";
import { Popup, ContactForm, Notification, Cookies, Changelogs } from "../../components";
import "./style.css";

const PopupManager = ({ content ,url}) => {
  const [popupQueue, setPopupQueue] = useState(["popupOpen", "cookiesPopupOpen", "empty"]);
  const [currentPopup, setCurrentPopup] = useState("");

  useEffect(() => {
    if (popupQueue.length > 0) {
      setCurrentPopup(popupQueue[0]); // Define o primeiro popup na fila como o popup atual
    } else {
      setCurrentPopup(""); // Define nenhum popup caso a fila esteja vazia
    }
  }, [popupQueue]);

  const onClose = () => {
    setPopupQueue(prevQueue => prevQueue.slice(1)); // Remove o primeiro item da fila
  };

  const [message, setMessage] = useState("");
  const handleSendMessage = () => {
    setMessage(content[0].messageSentSuccess);
  };

  const handleClick = async () => {
    try {
      const ipResponse = await fetch('https://api.ipify.org?format=json');
      const { ip } = await ipResponse.json();

      // Verificar se o IP já está cadastrado
      const pcInfo = localStorage.getItem(ip);
      if (pcInfo) {
        setPopupQueue(prevQueue => prevQueue.filter(popup => popup !== "cookiesPopupOpen"));
        return;
      }

      const locationResponse = await fetch(`https://ipinfo.io/${ip}/json`);
      const locationData = await locationResponse.json();

      const info = {
        id: ip, // Usando o IP como ID
        userAgent: navigator.userAgent,
        platform: navigator.platform,
        language: navigator.language,
        screenWidth: window.screen.width,
        screenHeight: window.screen.height,
        colorDepth: window.screen.colorDepth,
        ipAddress: ip,
        location: `${locationData.city}, ${locationData.region}, ${locationData.country}`,
        date: new Date().toLocaleString()
        // Adicione mais informações se desejar
      };


      // Salvando as informações no localStorage usando o IP como chave
      localStorage.setItem(ip, JSON.stringify(info));

      // Se as informações já foram salvas, remove o popup de cookies da fila
      setPopupQueue(prevQueue => prevQueue.filter(popup => popup !== "cookiesPopupOpen"));
    } catch (error) {
      console.error('Erro ao obter informações:', error);
    }
  };

  const renderNextPopup = () => {
    if (popupQueue.length === 0) {
      return null; // Se não houver mais nenhum popup na fila, fecha a sessão de popups
    }
  
    switch (currentPopup) {
      case "popupOpen":
        return (
          <Popup
            onClose={onClose}
            title={content[0].popuptitle}
            subTitle={content[0].popsubtitle}
          >
            <Notification message={message} /> {/* Adicione o componente Notification aqui */}
            <Changelogs content={content} handleSendMessage={handleSendMessage} />
            <h2>{content[0].personalInfoTitle}</h2>
            <ContactForm content={content} onMessageSent={handleSendMessage} url={url} />
          </Popup>
        );
      case "cookiesPopupOpen":
        return <Cookies content={content} onClick={handleClick} handleClosePopup={onClose} />;
      default:
        return null;
    }
  };
  

  return (
    <>
      <div className="flex w-full flex-col gap-5 bg-gray-50 pt-2.5">
        <div className="main-content flex flex-col items-center">
          {renderNextPopup()}
        </div>
      </div>
    </>
  );
};

export default PopupManager;
