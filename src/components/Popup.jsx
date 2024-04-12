import React, { useState } from 'react';
import '../css/Popup.css';

function Popup() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [popupMessage, setPopupMessage] = useState('');

  // Function to open the popup with a specific message
  const openPopup = (message) => {
    setPopupMessage(message);
    setIsPopupOpen(true);
  };

  // Function to close the popup
  const closePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <div className="pop">
      <h1>React Popup Example</h1>
      <button onClick={() => openPopup('Login successful!')}>Login</button>
      <button onClick={() => openPopup('Wrong data entered!')}>Wrong Data</button>

      {/* Popup window */}
      {isPopupOpen && (
        <div className="popup">
          <div className="popup-content">
            <span className="close" onClick={closePopup}>
              &times;
            </span>
            <p>{popupMessage}</p>
            <button onClick={closePopup}>OK</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Popup;