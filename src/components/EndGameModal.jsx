import React, { useState } from "react";
import "../styles/EndGameModal.style.css";

function EndGameModal({ score, onRestartPress }) {
  return (
    <div>
      <div className="overlay">
        <div className="modal-end">
          <div className="txt-container">
            <div className="text">
              <h2>🥳 Congrats! 🥳</h2>
              <p>Your score is: {score}</p>
            </div>
            <button onClick={onRestartPress} className="button">
              Restart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EndGameModal;
