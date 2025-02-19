import React, { useState } from "react";
import "./style.css";

const PortfolioComponent = () => {
  const [portfolioItems, setPortfolioItems] = useState([]);
  const [formData, setFormData] = useState({
    portfolioId: "",
    isDelete: false,
    Title: "",
    description: "",
    image: "",
    Logo: "",
    body: "",
    link: ""
  });
  const [isEditing, setIsEditing] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const enviarDados = () => {
    if (isEditing) {
      const updatedPortfolioItems = portfolioItems.map((item) =>
        item.portfolioId === formData.portfolioId ? formData : item
      );
      setPortfolioItems(updatedPortfolioItems);
      setIsEditing(false);
    } else {
      const newPortfolioItem = { ...formData, portfolioId: Date.now().toString() };
      setPortfolioItems([...portfolioItems, newPortfolioItem]);
    }
    setFormData({
      portfolioId: "",
      isDelete: false,
      Title: "",
      description: "",
      image: "",
      Logo: "",
      body: "",
      link: ""
    });
  };

  const editarItem = (item) => {
    setFormData(item);
    setIsEditing(true);
  };

  const excluirItem = (portfolioId) => {
    const updatedPortfolioItems = portfolioItems.filter((item) => item.portfolioId !== portfolioId);
    setPortfolioItems(updatedPortfolioItems);
  };

  const salvarComoArquivo = () => {
    const portfolioJSON = JSON.stringify(portfolioItems);
    const blob = new Blob([portfolioJSON], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "portfolio.json";
    a.click();
    URL.revokeObjectURL(url);
  };

  const carregarArquivo = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = (e) => {
      const loadedPortfolioItems = JSON.parse(e.target.result);
      setPortfolioItems(loadedPortfolioItems);
    };
    reader.readAsText(file);
  };

  return (
    <div className="container">
      <div className="fields">
        <ul>
          {Object.keys(formData).map((key) => (
            <li key={key}>{key}</li>
          ))}
        </ul>
      </div>
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
              disabled={key === "portfolioId" && isEditing}
            />
          </div>
        ))}
        <button onClick={enviarDados}>{isEditing ? "Salvar" : "Enviar Dados"}</button>
        <button onClick={salvarComoArquivo}>Salvar Portfolio</button>
        <input type="file" onChange={carregarArquivo} />
      </div>
      <div className="portfolio-items-container">
        {portfolioItems.map((item, index) => (
          <div key={index} className="portfolio-item">
            <h3>{item.Title}</h3>
            <p>{item.description}</p>
            <div dangerouslySetInnerHTML={{ __html: item.body }}></div>
            <button onClick={() => editarItem(item)}>Editar</button>
            <button onClick={() => excluirItem(item.portfolioId)}>Excluir</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PortfolioComponent;
