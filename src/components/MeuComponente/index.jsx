import React, { useState } from "react";
import { UseFetch } from "..";

const MeuComponente = () => {
  const [dados, setDados] = useState(null);
  const { executeFetch } = UseFetch({
    url: "https://0e27ec-kend-sandbox.dhiwise.co",
    api: "/device/api/v1/content/list",
    onMessageSent: (status, mensagem) => {
      console.log(status, mensagem);
      if (status === "SUCCESS") {
        setDados(mensagem); // Atualiza os dados com a resposta da requisição bem-sucedida
      } else {
        // Lida com o erro de alguma forma
        console.error("Erro:", mensagem);
      }
    }
  });

  // Função para enviar os dados
  const enviarDados = async () => {
    const formData = {
      "isActive": true,

};
    await executeFetch(formData);
  };

  return (
    <div>
      <button onClick={enviarDados}>Enviar Dados</button>
      {/* Exibe os dados, se existirem */}
      {dados && <div>{JSON.stringify(dados)}</div>}
    </div>
  );
};

export default MeuComponente;
