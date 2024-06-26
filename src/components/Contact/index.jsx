import React from "react";
import { Button } from "..";

export default function Contact({ languageindex, content, msg, withMessage, openInNewTab, buttonClassName, transparent }) {
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
      className={`h-[36px] min-w-[92px] rounded-[8px] ${transparent ? 'bg-transparent border-white' : 'bg-green-700 border-green-700'} border border-solid px-[15px] text-white text-xs tracking-[0.50px] ${buttonClassName}`}
    >
      {content[languageindex].personalInfoButton}
    </Button>
  );
}
