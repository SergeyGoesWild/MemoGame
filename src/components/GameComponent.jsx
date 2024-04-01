import { useState } from "react";
import "../styles/GameComponent.style.css";
import Tile from "./Tile";

let score = 0;
let tilesUsed = 0;

function GameComponent({ tilesData, onVictory }) {
  const [data, setData] = useState(tilesData);
  const [firstActiveTile, setFirstActiveTile] = useState(null);
  const [pause, setPause] = useState(false);

  const handleActiveTiles = (tile) => {
    if (firstActiveTile === null) {
      setFirstActiveTile(tile);
    } else {
      const activeTiles = [firstActiveTile, tile];
      if (activeTiles[0].pic === activeTiles[1].pic) {
        score += 1;
        guessedRight();
      } else {
        score += 1;
        guessedWrong(activeTiles);
      }
    }
  };

  const handleTileClick = (id) => {
    const indexToChange = data.findIndex((item) => item.id === id);
    data[indexToChange].clicked = true;
    setData([...data]);
    handleActiveTiles(data[indexToChange]);
  };

  const setClosed = (id) => {
    const indexToChange = data.findIndex((item) => item.id === id);
    data[indexToChange].clicked = false;
    setData([...data]);
  };

  const guessedWrong = (activeTiles) => {
    setPause(true);
    console.log("Score : ", score);
    setTimeout(() => {
      setClosed(activeTiles[0].id);
      setClosed(activeTiles[1].id);
      setPause(false);
    }, 1000);
    setFirstActiveTile(null);
  };

  const guessedRight = () => {
    console.log("Score : ", score);
    tilesUsed += 2;
    console.log("USED : ", tilesUsed);
    setFirstActiveTile(null);
    if (tilesUsed == tilesData.length) {
      onVictory(score);
      tilesUsed = 0;
      score = 0;
    }
  };

  return (
    <>
      <div className="container-padding">
        <div className="container-grid">
          {data.map((item) => (
            <Tile
              key={item.id}
              tileObj={item}
              pause={pause}
              onTileClick={() => {
                handleTileClick(item.id);
              }}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default GameComponent;
