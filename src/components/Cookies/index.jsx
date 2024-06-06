import React, { useState } from 'react';
import './Cookies.css';
import { Popup } from "../../components"; // Importe o componente Notification

const Cookies = ({languageindex, content, onClick, handleClosePopup }) => {
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
            {content[languageindex].cookiesa}
            {showMore && (
              <>
                <br />
                <br />
                {content[languageindex].cookiesb}
              </>
            )}
          </p>
          <button onClick={handleReadMore}>
            {showMore ? content[languageindex].cookiesmenos : content[languageindex].cookiesmais}
          </button>
        </div>
      </Popup>
    </>
  );
};

export default Cookies;
