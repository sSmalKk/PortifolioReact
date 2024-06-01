import React, { useState } from "react";
import "./style.css";

const Parceiros = () => {
  const [dados, setDados] = useState(null);
  const [formData, setFormData] = useState({
    id: "",
    title: "",
    image: "",
    url: "",
  });
  const [parceirosCriados, setPostsCriados] = useState([]);
  const [isEditing, setIsEditing] = useState(false);


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const enviarDados = async () => {
    if (isEditing) {
      // Atualiza o parceiro existente
      const updatedPosts = parceirosCriados.map((parceiro) =>
        parceiro.id === formData.id ? formData : parceiro
      );
      setPostsCriados(updatedPosts);
      setIsEditing(false);
    } else {
      // Adiciona um novo parceiro com um ID único
      const newPost = { ...formData, id: Date.now().toString() };
      setPostsCriados([...parceirosCriados, newPost]);
    }
    // Limpa o formulário
    setFormData({
      id: "",
      title: "",
      image: "",
      url: "",
    });
  };

  const salvarPostsComoArquivo = () => {
    // Converte a array de parceiros para JSON
    const parceirosJSON = JSON.stringify(parceirosCriados);
    // Cria um novo Blob com os dados JSON
    const blob = new Blob([parceirosJSON], { type: "application/json" });
    // Cria um link temporário para download
    const url = URL.createObjectURL(blob);
    // Cria um elemento 'a' para o link de download
    const a = document.createElement("a");
    // Define o atributo 'href' com o URL do Blob
    a.href = url;
    // Define o nome do arquivo
    a.download = "parceiros.json";
    // Simula um clique no link de download
    a.click();
    // Libera o URL do objeto Blob
    URL.revokeObjectURL(url);
  };

  const carregarPosts = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = (e) => {
      const loadedPosts = JSON.parse(e.target.result);
      setPostsCriados(loadedPosts);
    };
    reader.readAsText(file);
  };

  const editarPost = (parceiro) => {
    setFormData(parceiro);
    setIsEditing(true);
  };

  const excluirPost = (id) => {
    const updatedPosts = parceirosCriados.filter((parceiro) => parceiro.id !== id);
    setPostsCriados(updatedPosts);
  };

  return (
    <div className="container">
      <div className="fields">
        {/* Lista de campos */}
        <ul>
          {Object.keys(formData).map((key) => (
            <li key={key}>{key}</li>
          ))}
        </ul>
      </div>
      {/* Inputs para inserir os valores */}
      <div className="inputs">
        {Object.keys(formData).map((key) => (
          <div key={key} className="input-wrapper">
            <label htmlFor={key}>{key}</label>
            <input
              type="text"
              id={key}
              name={key}
              value={formData[key]}
              onChange={handleChange}
              disabled={key === "id" && isEditing}
            />
          </div>
        ))}
        <button onClick={enviarDados}>{isEditing ? "Salvar" : "Enviar Dados"}</button>
        <button onClick={salvarPostsComoArquivo}>Salvar Posts</button>
        <input type="file" onChange={carregarPosts} />
      </div>
      {/* Exibe os dados, se existirem */}
      {dados && <div>{JSON.stringify(dados)}</div>}
      {/* Exibe os parceiros criados */}
      <div className="parceiros-container">
        {parceirosCriados.map((parceiro, index) => (
          <div key={index} className="parceiro">
            <h3>{parceiro.title}</h3>
            <p>{parceiro.description}</p>
            <div dangerouslySetInnerHTML={{ __html: parceiro.articleSection }}></div>
            <div dangerouslySetInnerHTML={{ __html: parceiro.articleBody }}></div>
            <img src={parceiro.image} alt="Imagem do Post" />
            {/* Adicione outras informações do parceiro aqui */}
            <button onClick={() => editarPost(parceiro)}>Editar</button>
            <button onClick={() => excluirPost(parceiro.id)}>Excluir</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Parceiros;
