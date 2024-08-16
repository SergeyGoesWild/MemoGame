import { useState } from "react";
import "./App.css";
import GameComponent from "./components/GameComponent";
import TableGenerator from "./scripts/TableGenerator";
import InputModal from "./components/InputModal";
import EndGameModal from "./components/EndGameModal";
import Confetti from "react-confetti";
import useWindowSize from "./components/UseWindowSize";

let globalScore = 0;

function App() {
  const [tilesData, setTilesData] = useState();
  const [inputSubmited, setInputSubmitted] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [confNumber, setConfNumber] = useState(0);
  const { width, height } = useWindowSize();

  const onSubmitButtonPress = (inputValue) => {
    setTilesData(TableGenerator(inputValue));
    setInputSubmitted(true);
  };

  const onRestartPress = () => {
    console.log("RESTART");
    setConfNumber(0);
    setInputSubmitted(false);
    setGameOver(false);
  };

  const onVictory = (score) => {
    setConfNumber(200);
    globalScore = score;
    setGameOver(true);
  };

  return (
    <div
      className="container-background"
      style={{
        width: "10",
        height: "50",
        backgroundColor: "rgb(0, 0, 0)",
      }}
    >
      <Confetti width={width} height={height} numberOfPieces={confNumber} />
      {!inputSubmited && (
        <InputModal onSubmitButtonPress={onSubmitButtonPress} />
      )}
      {inputSubmited && (
        <div className={gameOver ? "fade-out" : "game-component"}>
          <GameComponent tilesData={tilesData} onVictory={onVictory} />
        </div>
      )}
      {gameOver && (
        <EndGameModal score={globalScore} onRestartPress={onRestartPress} />
      )}
    </div>
  );
}

export default App;
