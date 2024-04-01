import { useState } from "react";
import "./App.css";
import GameComponent from "./components/GameComponent";
import TableGenerator from "./scripts/TableGenerator";
import InputModal from "./components/InputModal";
import EndGameModal from "./components/EndGameModal";
import Confetti from "react-confetti";

let globalScore = 0;

function App() {
  const [tilesData, setTilesData] = useState();
  const [inputSubmited, setInputSubmitted] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [confNumber, setConfNumber] = useState(0);

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
    <div className="container-background">
      <Confetti numberOfPieces={confNumber} />
      {!inputSubmited && (
        <InputModal onSubmitButtonPress={onSubmitButtonPress} />
      )}
      {gameOver && (
        <EndGameModal score={globalScore} onRestartPress={onRestartPress} />
      )}
      {inputSubmited && (
        <GameComponent tilesData={tilesData} onVictory={onVictory} />
      )}
    </div>
  );
}

export default App;
