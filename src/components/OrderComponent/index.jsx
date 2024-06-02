import React, { useState } from "react";
import "./style.css";

const OrderComponent = () => {
  const [orders, setOrders] = useState([]);
  const [formData, setFormData] = useState({
    id: "",
    item: "",
    isDelete: false,
    Title: "",
    description: "",
    image: "",
    Icon: "",
    body: ""
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
      const updatedOrders = orders.map((order) =>
        order.id === formData.id ? formData : order
      );
      setOrders(updatedOrders);
      setIsEditing(false);
    } else {
      const newOrder = { ...formData, id: Date.now().toString() };
      setOrders([...orders, newOrder]);
    }
    setFormData({
      id: "",
      item: "",
      isDelete: false,
      Title: "",
      description: "",
      image: "",
      Icon: "",
      body: ""
    });
  };

  const editarPedido = (order) => {
    setFormData(order);
    setIsEditing(true);
  };

  const excluirPedido = (id) => {
    const updatedOrders = orders.filter((order) => order.id !== id);
    setOrders(updatedOrders);
  };

  const salvarComoArquivo = () => {
    const ordersJSON = JSON.stringify(orders);
    const blob = new Blob([ordersJSON], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "orders.json";
    a.click();
    URL.revokeObjectURL(url);
  };

  const carregarArquivo = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = (e) => {
      const loadedOrders = JSON.parse(e.target.result);
      setOrders(loadedOrders);
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
              disabled={key === "id" && isEditing}
            />
          </div>
        ))}
        <button onClick={enviarDados}>{isEditing ? "Salvar" : "Enviar Dados"}</button>
        <button onClick={salvarComoArquivo}>Salvar Orders</button>
        <input type="file" onChange={carregarArquivo} />

      </div>
      <div className="orders-container">
        {orders.map((order, index) => (
          <div key={index} className="order">
            <h3>{order.Title}</h3>
            <p>{order.description}</p>
            <div dangerouslySetInnerHTML={{ __html: order.body }}></div>
            <img src={order.image} alt="Imagem do Pedido" />
            <img src={order.Icon} alt="Ícone do Pedido" />
            <button onClick={() => editarPedido(order)}>Editar</button>
            <button onClick={() => excluirPedido(order.id)}>Excluir</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrderComponent;
