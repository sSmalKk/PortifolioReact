import React, { useState } from "react";
import "./style.css";

const MeuComponente = () => {
  const [dados] = useState(null);
  const [formData, setFormData] = useState({
    id: "",
    title: "",
    alternativeHeadline: "",
    image: "",
    publishDate: "",
    author: {
      name: "",
      image: "",
      email: ""
    },
    publisher: {
      name: "",
      url: "",
      logo: ""
    },
    articleSection: "",
    articleBody: "",
    description: "",
    slug: "",
    url: "",
    isDraft: false,
    Categoria: ""
  });
  const [postsCriados, setPostsCriados] = useState([]);
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
      // Atualiza o post existente
      const updatedPosts = postsCriados.map((post) =>
        post.id === formData.id ? formData : post
      );
      setPostsCriados(updatedPosts);
      setIsEditing(false);
    } else {
      // Adiciona um novo post com um ID único
      const newPost = { ...formData, id: Date.now().toString() };
      setPostsCriados([...postsCriados, newPost]);
    }
    // Limpa o formulário
    setFormData({
      id: "",
      title: "",
      alternativeHeadline: "",
      image: "",
      publishDate: "",
      author: {
        name: "",
        image: "",
        email: ""
      },
      publisher: {
        name: "",
        url: "",
        logo: ""
      },
      articleSection: "",
      articleBody: "",
      description: "",
      slug: "",
      url: "",
      isDraft: false,
      Categoria: ""
    });
  };

  const salvarPostsComoArquivo = () => {
    // Converte a array de posts para JSON
    const postsJSON = JSON.stringify(postsCriados);
    // Cria um novo Blob com os dados JSON
    const blob = new Blob([postsJSON], { type: "application/json" });
    // Cria um link temporário para download
    const url = URL.createObjectURL(blob);
    // Cria um elemento 'a' para o link de download
    const a = document.createElement("a");
    // Define o atributo 'href' com o URL do Blob
    a.href = url;
    // Define o nome do arquivo
    a.download = "posts.json";
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

  const editarPost = (post) => {
    setFormData(post);
    setIsEditing(true);
  };

  const excluirPost = (id) => {
    const updatedPosts = postsCriados.filter((post) => post.id !== id);
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
      {/* Exibe os posts criados */}
      <div className="posts-container">
        {postsCriados.map((post, index) => (
          <div key={index} className="post">
            <h3>{post.title}</h3>
            <p>{post.description}</p>
            <div dangerouslySetInnerHTML={{ __html: post.articleSection }}></div>
            <div dangerouslySetInnerHTML={{ __html: post.articleBody }}></div>
            <img src={post.image} alt="Imagem do Post" />
            {/* Adicione outras informações do post aqui */}
            <button onClick={() => editarPost(post)}>Editar</button>
            <button onClick={() => excluirPost(post.id)}>Excluir</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MeuComponente;
