import { useEffect, useState } from "react";
import "./App.css";
import Tile from "./components/Tile";
import TableGenerator from "./scripts/TableGenerator";
import InputModal from "./components/InputModal";
const INIT_STATE = TableGenerator(12);

function App() {
  const [data, setData] = useState(INIT_STATE);
  const [firstActiveTile, setFirstActiveTile] = useState(null);
  const [inputSubmited, setInputSubmitted] = useState(false);
  const [pause, setPause] = useState(false);

  const handleActiveTiles = (tile) => {
    if (firstActiveTile === null) {
      setFirstActiveTile(tile);
    } else {
      const activeTiles = [firstActiveTile, tile];
      if (activeTiles[0].pic === activeTiles[1].pic) {
        guessedRight();
      } else {
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
    console.log("guessed WRONG");
    setTimeout(() => {
      setClosed(activeTiles[0].id);
      setClosed(activeTiles[1].id);
    }, 1000);
    setFirstActiveTile(null);
  };

  const guessedRight = () => {
    console.log("guessed RIGHT");
    setFirstActiveTile(null);
  };

  const onSubmitButtonPress = (inputValue) => {
    setInputSubmitted(true);
  };

  return (
    <>
      {!inputSubmited && (
        <InputModal onSubmitButtonPress={onSubmitButtonPress} />
      )}
      {inputSubmited && (
        <div className="container-flex">
          <div className="container-grid">
            {data.map((item) => (
              <Tile
                key={item.id}
                tileObj={item}
                onTileClick={() => {
                  handleTileClick(item.id);
                }}
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
}

export default App;
