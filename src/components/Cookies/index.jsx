// Cookies.js
import React, { useState } from 'react';
import './Cookies.css';
import { Popup } from "../../components"; // Importe o componente Notification

const Cookies = ({ onClick, handleClosePopup }) => {
  const [showMore, setShowMore] = useState(false);

  const handleReadMore = () => {
    setShowMore(!showMore);
  };

  return (
    <>
      <Popup
        title="Política de Cookies"
        subTitle="Este site utiliza cookies para melhorar a sua experiência."
        onClose={handleClosePopup}
        onClick={onClick}
        buttonContent="Aceitar"
      >
        <div className='flex'>
          <p>
            Aqui vai o conteúdo explicativo sobre cookies...
            {showMore && (
              <>
                <br />
                <br />
                Conteúdo adicional que aparece quando o botão "Ler mais" é clicado.
              </>
            )}
          </p>
          <button onClick={handleReadMore}>
            {showMore ? 'Ler menos' : 'Ler mais'}
          </button>
        </div>
      </Popup>
    </>
  );
};

export default Cookies;
