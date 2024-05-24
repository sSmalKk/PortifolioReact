// Popup.js
import React from 'react';
import './style.css';
import { Img } from "../../components"; // Importe o componente Notification

const Popup = ({onClick, title, subTitle, children, onClose, buttonContent, imageUrl }) => {
  return (
    <div className="popup-overlay">
      <div className="popup-container">
        <button className="popup-close" onClick={onClose}>x</button>
        <div className="popup-content">
          <div className="popup-header">
            <h2 className="popup-title">{title}</h2>
            {subTitle && <h3 className="popup-subtitle">{subTitle}</h3>}
          </div>
          <div className="popup-main">
            {imageUrl && <Img src={imageUrl} alt="Popup Image" className="popup-image" />}
            {children}
          </div>
          {buttonContent && (
            <div className="popup-footer">
              <button onClick={onClick} className="popup-button">{buttonContent}</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Popup;
