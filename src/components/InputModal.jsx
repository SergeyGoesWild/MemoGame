import React, { useState } from "react";
import "../styles/InputModal.style.css";

function InputModal({ onSubmitButtonPress }) {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmitButtonPress(inputValue);
  };

  return (
    <div>
      <div className="overlay">
        <div className="modal">
          <form onSubmit={handleSubmit}>
            <div className="form-container">
              <label>Enter number of tiles:</label>
              <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                placeholder="Enter an even number"
              />
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default InputModal;
