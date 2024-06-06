import React, { useState } from 'react';
import './Cookies.css';
import { Popup } from "../../components"; // Importe o componente Notification

const Cookies = ({languageIndex, content, onClick, handleClosePopup }) => {
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
            {content[languageIndex].cookiesa}
            {showMore && (
              <>
                <br />
                <br />
                {content[languageIndex].cookiesb}
              </>
            )}
          </p>
          <button onClick={handleReadMore}>
            {showMore ? content[languageIndex].cookiesmenos : content[languageIndex].cookiesmais}
          </button>
        </div>
      </Popup>
    </>
  );
};

export default Cookies;
