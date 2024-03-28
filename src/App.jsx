import { useEffect, useState } from "react";
import "./App.css";
import Tile from "./components/Tile";
import TableGenerator from "./scripts/TableGenerator";
import InputModal from "./components/InputModal";
import EndGameModal from "./components/EndGameModal";
import Confetti from "react-confetti";

// const INIT_STATE = TableGenerator(12);
let score = 0;
let tilesUsed = 0;

function App() {
  const [data, setData] = useState();
  const [inputData, setInputData] = useState(0);
  const [firstActiveTile, setFirstActiveTile] = useState(null);
  const [inputSubmited, setInputSubmitted] = useState(false);
  const [pause, setPause] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [confNumber, setConfNumber] = useState(0);
  // может переделать эту систему на супер-элемент с модалкой и компонентом игры
  // где inputData будет в него передаватся через проп
  // useEffect(() => {
  //   setData(TableGenerator(inputData));
  // }, [inputData]);

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
    if (tilesUsed == inputData) {
      onVictory();
    }
  };

  const onSubmitButtonPress = (inputValue) => {
    setInputData(inputValue);
    setData(TableGenerator(inputValue));
    setInputSubmitted(true);
  };

  const onRestartPress = () => {
    console.log("RESTART");
    score = 0;
    tilesUsed = 0;
    setConfNumber(0);
    setInputSubmitted(false);
    setPause(false);
    setGameOver(false);
  };

  const onVictory = () => {
    setConfNumber(200);
    setGameOver(true);
  };

  return (
    <>
      <Confetti numberOfPieces={confNumber} />
      {!inputSubmited && (
        <InputModal onSubmitButtonPress={onSubmitButtonPress} />
      )}
      {gameOver && (
        <EndGameModal score={score} onRestartPress={onRestartPress} />
      )}
      {inputSubmited && (
        <div className="container-flex">
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
      )}
    </>
  );
}

export default App;
