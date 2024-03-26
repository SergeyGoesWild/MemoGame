import React, { useState } from "react";
import "../styles/InputModal.style.css";

function InputModal({ onSubmitButtonPress }) {
  const [inputValue, setInputValue] = useState("");
  const [inputConform, setInputConform] = useState(false);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
    let stateVar = Number(event.target.value);
    console.log("Analizing : ", stateVar);
    if (/^\d+$/.test(stateVar)) {
      if (stateVar < 20 && stateVar > 0) {
        if (stateVar % 2 === 0) {
          console.log("All passed");
          setInputConform(true);
        } else {
          console.log("Division");
          setInputConform(false);
        }
      } else {
        console.log("Size");
        setInputConform(false);
      }
    } else {
      console.log("Symbols");
      setInputConform(false);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (inputConform) {
      onSubmitButtonPress(inputValue);
    }
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
                placeholder="Type here"
              />
              {!inputConform && (
                <span className="no-conform">
                  You need to enter an even number
                </span>
              )}
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default InputModal;
