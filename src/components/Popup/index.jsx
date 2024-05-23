// Popup.js
import React from 'react';
import './Popup.css';

const Popup = ({ title, subTitle, children, onClose }) => {
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
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popup;
