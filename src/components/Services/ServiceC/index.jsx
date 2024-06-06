import React, { useState } from 'react';
import { ContactForm, Popup, Notification, Text, Button } from "../..";
import "../style.css"

const ServiceComponentType3 = ({languageIndex, url, service, imagePosition, content }) => {
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
    setMessage(content[languageIndex]?.messageSentSuccess || "Message sent successfully");
  };

  return (
    <div
      id={service.id}
      className="flex flex-col items-start justify-end gap-[21px] bg-cover bg-no-repeat py-[50px] md:h-auto md:py-5"
      style={{
        backgroundImage: `url(${service.image})`,
        backgroundPosition: imagePosition // Apply imagePosition directly to backgroundPosition
      }}
    >{isPopupOpen && (
      <Popup onClose={handleClosePopup} title={service.name} subTitle={service.subtitle}>
        <Notification message={message} />
        <div
          className="w-full leading-[56px]"
          dangerouslySetInnerHTML={{ __html: service.body }}
        />
        <ContactForm content={content} onMessageSent={handleSendMessage} url={url} />

      </Popup>
    )}

      <Text size="lg" as="p" className="mt-[563px] tracking-[0.50px] !text-white-A700">
        {service.title}
      </Text>
      <div className="flex">
        <Text size="8xl" as="p" className="mt-2 tracking-[-1.50px] !text-white-A700">
          {service.item}
        </Text>
      </div>
      <Text size="6xl" as="p" className="w-[55%] leading-[56px] !text-white-A700 md:w-full md:p-5">
        {service.description}
      </Text>
      <Button
        color="black_900_60"
        size="md"
        shape="round"
        className="min-w-[92px] border border-solid border-green-400 tracking-[0.50px]"
        onClick={handleButtonClick} // Chame a função handleButtonClick ao clicar no botão
      >
        {content[languageIndex].falecmg}
      </Button>
    </div>
  );
};

export default ServiceComponentType3;
