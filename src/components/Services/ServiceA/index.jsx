import React, { useState } from "react";
import { ContactForm, Popup, Notification, Text, Img, Button } from "../..";
import "../style.css";

const ServiceComponentType1 = ({ languageindex, url, content, service }) => {
  const [message, setMessage] = useState("");
  const handleButtonClick = () => {
    // Abrir o popup ao clicar no botão
  };

  const handleClosePopup = () => {
    // Fechar o popup
  };

  const handleSendMessage = () => {
    setMessage(
      content[languageindex]?.messageSentSuccess || "Message sent successfully"
    );
  };

  return (
    <div id={service.id}>
      <div className="service-component flex items-start justify-around w-full">
        <Img
          src={service.image}
          alt="container"
          className="flex-shrink-0 min-w-[200px] h-[380px] w-[379px] object-cover"
        />
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
            {content[languageindex]?.falecmg || "Fale conosco"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ServiceComponentType1;
