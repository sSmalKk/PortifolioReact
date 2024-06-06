import React, { useState, useEffect } from "react";
import { UseFetch, Popup, ContactForm, Notification, Cookies, Changelogs } from "../../components";
import "./style.css";

const PopupManager = ({ content, url }) => {
  const [popupQueue, setPopupQueue] = useState(["popupOpen", "cookiesPopupOpen", "empty"]);
  const [currentPopup, setCurrentPopup] = useState("");

  useEffect(() => {
    if (popupQueue.length > 0) {
      setCurrentPopup(popupQueue[0]);
    } else {
      setCurrentPopup("");
    }
  }, [popupQueue]);

  const onClose = () => {
    setPopupQueue((prevQueue) => prevQueue.slice(1));
  };

  const [message, setMessage] = useState("");
  const handleSendMessage = (msg) => {
    setPopupQueue((prevQueue) => prevQueue.slice(1));
    setMessage(msg);
  };

  const handleClick = async () => {
    try {
      const ipResponse = await fetch('https://api.ipify.org?format=json');
      const { ip } = await ipResponse.json();

      const pcInfo = localStorage.getItem('cookiesAccepted');
      if (pcInfo) {
        setPopupQueue((prevQueue) => prevQueue.filter((popup) => popup !== "cookiesPopupOpen"));
        return;
      }

      const locationResponse = await fetch(`https://ipinfo.io/${ip}/json`);
      const locationData = await locationResponse.json();

      const info = {
        id: ip,
        userAgent: navigator.userAgent,
        platform: navigator.platform,
        language: navigator.language,
        screenWidth: window.screen.width,
        screenHeight: window.screen.height,
        colorDepth: window.screen.colorDepth,
        ipAddress: ip,
        location: `${locationData.city}, ${locationData.region}, ${locationData.country}`,
        date: new Date().toLocaleString(),
      };

      const { executeFetch } = UseFetch({
        url: "https://0e27ec-kend-sandbox.dhiwise.co",
        api: "/client/content/list",
        onMessageSent: (status, mensagem) => {
          if (status === "SUCCESS") {
            console.log("saved");
          } else {
            console.error("Erro:", mensagem);
          }
        },
      });

      await executeFetch(info);

      localStorage.setItem('cookiesAccepted', 'true');

      setPopupQueue((prevQueue) => prevQueue.filter((popup) => popup !== "cookiesPopupOpen"));
    } catch (error) {
      console.error('Erro ao obter informações:', error);
      setPopupQueue((prevQueue) => prevQueue.filter((popup) => popup !== "cookiesPopupOpen"));
    }
  };

  const renderNextPopup = () => {
    if (popupQueue.length === 0) {
      return null;
    }

    switch (currentPopup) {
      case "popupOpen":
        return (
          <Popup onClose={onClose} title={content[0].popuptitle} subTitle={content[0].popsubtitle}>
            <Notification message={message} />
            <Changelogs content={content} />
            <h2>{content[0].personalInfoTitle}</h2>
            <ContactForm onClose={onClose} content={content} onMessageSent={handleSendMessage} url={url} />
          </Popup>
        );
      case "cookiesPopupOpen":
        return <Cookies content={content} onClick={handleClick} handleClosePopup={onClose} />;
      default:
        return null;
    }
  };

  useEffect(() => {
    const popupStorageKey = `popupShown-${currentPopup}`;

    // Verificar se o popup já foi mostrado anteriormente
    if (localStorage.getItem(popupStorageKey)) {
      setPopupQueue((prevQueue) => prevQueue.filter((popup) => popup !== currentPopup));
    } else {
      // Marcar o popup como mostrado no localStorage
      localStorage.setItem(popupStorageKey, true);
    }
  }, [currentPopup]);

  return (
    <div className="flex w-full flex-col gap-5 bg-gray-50 pt-2.5">
      <div className="main-content flex flex-col items-center">
        {renderNextPopup()}
      </div>
    </div>
  );
};

export default PopupManager;
