import React, { useState, useEffect } from "react";
import { Text } from "..";

const ServiceItem = ({ service, index, animationDelay, animationDuration }) => {
  // Estado para controlar a animação
  const [animationState, setAnimationState] = useState("paused");

  // Calcule o atraso de animação com base no índice e no tempo de atraso recebido
  const delay = `${index * animationDelay}s`;

  // UseEffect para controlar a animação
  useEffect(() => {
    // Inicie a animação após um breve atraso
    const timeout = setTimeout(() => {
      setAnimationState("running");
    }, 500); // Um pequeno atraso antes de iniciar a animação

    // Limpe o timeout ao desmontar o componente para evitar vazamentos de memória
    return () => clearTimeout(timeout);
  }, []); // Apenas executa uma vez no carregamento inicial

  // Função para rolar até o elemento com o ID correspondente
  const scrollToElement = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <React.Fragment>
      {/* Adicione uma linha horizontal */}
      <div className="w-full border-t border-gray-300"></div>
      {/* Texto do serviço com atraso de animação */}
      <button
        onClick={() => scrollToElement(service.id)}
        className={`wave-animation uppercase tracking-[4.00px] !text-black-900_01 animate-delay`}
        style={{
          animationDelay: delay,
          animationPlayState: animationState,
          animationDuration: `${animationDuration}s`,
        }}
      >
        <Text size="md" as="p">
          {service.name}
        </Text>
      </button>
    </React.Fragment>
  );
};

export { ServiceItem };
