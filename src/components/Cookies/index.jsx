import React, { useState } from 'react';
import './Cookies.css';
import { Popup } from "../../components"; // Importe o componente Notification

const Cookies = ({ content, onClick, handleClosePopup }) => {
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
            {content[0].cookiesa}
            {showMore && (
              <>
                <br />
                <br />
                {content[0].cookiesb}
              </>
            )}
          </p>
          <button onClick={handleReadMore}>
            {showMore ? content[0].cookiesmenos : content[0].cookiesmais}
          </button>
        </div>
      </Popup>
    </>
  );
};

export default Cookies;
