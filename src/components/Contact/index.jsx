import React from "react";
import { Button } from "..";

export default function Contact({ content, msg, withMessage, openInNewTab }) {
  // Construção do URL com ou sem mensagem
  const phone = "5561981594849";
  const baseUrl = `https://api.whatsapp.com/send?phone=${encodeURIComponent(phone)}`;
  const url = withMessage ? `${baseUrl}&text=${encodeURIComponent(msg)}` : baseUrl;

  // Função para redirecionar para o URL
  const redirectToWhatsApp = () => {
    if (openInNewTab) {
      window.open(url, "_blank");
    } else {
      window.location.href = url;
    }
  };

  return (
    <Button
      onClick={redirectToWhatsApp}
      className="h-[36px] min-w-[92px] rounded-[18px] border border-solid border-green-400 bg-green-700 px-[15px] text-xs tracking-[0.50px] text-white-A700"
    >
      {content[0].personalInfoButton}
    </Button>
  );
}
