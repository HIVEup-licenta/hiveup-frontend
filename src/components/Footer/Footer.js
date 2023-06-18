import React, {useState} from "react";
import { Modal } from '@mui/material';
import "./FooterStyle.css";

export default function Footer() {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const handleContactClick = () => {
    setIsOpen(true);
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSendEmail = () => {
    // Assuming you have already set up Firebase and configured the necessary email sending functionality

    // Send the email using Firebase
    // Code to send email using Firebase's email sending functionality

    // Reset the input value and close the modal
    setInputValue("");
    setIsOpen(false);
  };

  return (
    <div className="footer-component">
      <footer className="footer">
        <span className="footer-text" onClick={handleContactClick}>Contact us</span>
        {/* {isOpen && (
        <Modal onClose={() => setIsOpen(false)}>
          <h2>Tell us what is you question</h2>
          <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            maxLength={200}
          />
          <button onClick={handleSendEmail}>Send</button>
        </Modal>
      )} */}
      </footer>
    </div>
  );
}
