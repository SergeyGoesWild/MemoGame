import { useState } from "react";
import "../styles/Tile.style.css";

function Tile({ tileObj, pause, onTileClick }) {
  return (
    <div
      onClick={() => {
        if (tileObj.clicked === false && pause === false) {
          onTileClick();
        }
      }}
    >
      <div className={tileObj.clicked ? "tile-open" : "tile-closed"}>
        {tileObj.clicked && <p className="emoji">{tileObj.pic}</p>}
      </div>
    </div>
  );
}

export default Tile;
