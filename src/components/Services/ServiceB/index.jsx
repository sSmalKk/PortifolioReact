import React, { useState } from 'react';
import { ContactForm, Notification, Text, Img, Button, Popup } from "../..";
import "../style.css";

const ServiceComponentType2 = ({ url, content, service }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false); // Estado para controlar se o popup está aberto
  const [message, setMessage] = useState("");

  const handleButtonClick = () => {
    // Abrir o popup ao clicar no botão
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    // Fechar o popup
    setIsPopupOpen(false);
  };

  const handleSendMessage = () => {
    setMessage(content[0]?.messageSentSuccess || "Message sent successfully");
  };

  return (
    <div id={service.id}>
      {isPopupOpen && (
        <Popup onClose={handleClosePopup} title={service.name} subTitle={service.subtitle}>
          <Notification message={message} />
          <div
            className="w-full leading-[56px]"
            dangerouslySetInnerHTML={{ __html: service.body }}
          />
          <ContactForm content={content} onMessageSent={handleSendMessage} url={url} />

        </Popup>
      )}
      <div className="service-component flex items-start justify-around w-full">
        <div className="flex flex-col items-start gap-[21px] self-stretch">
          <Text size="lg" as="p" className="tracking-[0.50px]">
            {service.item}
          </Text>
          <div className="flex">
            <Text size="6xl" as="p" className="mt-2 tracking-[-1.50px]">
              {service.Title}
            </Text>
          </div>
          <Text size="3xl" as="p" className="w-full leading-[56px]">
            {service.description}
          </Text>

          <Button
            color="green_700"
            size="md"
            shape="round"
            className="min-w-[92px] border border-solid border-green-400 tracking-[0.50px]"
            onClick={handleButtonClick} // Chame a função handleButtonClick ao clicar no botão
          >
            {content[0].falecmg}
          </Button>
        </div>

        <Img
          src={service.image}
          alt="container"
          className="flex-shrink-0 min-w-[200px] h-[380px] w-[379px] object-cover"
        />

      </div>
    </div>
  );
};

export default ServiceComponentType2;
