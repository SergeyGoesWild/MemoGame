import { useState } from "react";
import "../styles/Tile.style.css";

function Tile({ emoji, incrementClicked }) {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
    incrementClicked();
  };

  return (
    <div onClick={handleClick}>
      <div className={clicked ? "tile-open" : "tile-closed"}>
        {clicked && <p className="emoji">{emoji}</p>}
      </div>
    </div>
  );
}

export default Tile;
