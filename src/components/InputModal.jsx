import React, { useState } from "react";
import "../styles/InputModal.style.css";

function InputModal({ onSubmitButtonPress }) {
  const [inputValue, setInputValue] = useState("");
  const [inputConform, setInputConform] = useState(false);
  const [placeHolder, setPlaceHolder] = useState("\u00A0");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
    let stateVar = Number(event.target.value);
    console.log("Analizing : ", stateVar);
    if (/^\d+$/.test(stateVar)) {
      if (stateVar <= 20 && stateVar > 0) {
        if (stateVar % 2 === 0) {
          console.log("All passed");
          setInputConform(true);
          setPlaceHolder("\u00A0");
        } else {
          console.log("Division");
          setInputConform(false);
          setPlaceHolder("You need an even number");
        }
      } else {
        console.log("Size");
        setInputConform(false);
        setPlaceHolder("You need an even number");
      }
    } else {
      console.log("Symbols");
      setInputConform(false);
      setPlaceHolder("You need an even number");
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
          <form onSubmit={handleSubmit} className="form-container">
            <label>Enter number of tiles:</label>
            <input
              type="text"
              value={inputValue}
              onChange={handleInputChange}
              placeholder="Type here"
              className="input-field"
            />
            <span className="no-conform">{placeHolder}</span>
            <button type="submit" className="button">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default InputModal;
