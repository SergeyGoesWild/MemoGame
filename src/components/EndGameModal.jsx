import React, { useState } from "react";
import "../styles/InputModal.style.css";

function EndGameModal({ score, onRestartPress }) {
  return (
    <div>
      <div className="overlay">
        <div className="modal">
          <div className="form-container">
            <p>Congrats!</p>
            <p>Your score is: {score}</p>
            <button onClick={onRestartPress}>Restart</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EndGameModal;
