import { useState } from "react";
import "./App.css";
import Tile from "./components/Tile";

function App() {
  const [numberOfClicked, setNumberOfClicked] = useState(0);
  const incrementClicked = () => {
    setNumberOfClicked(numberOfClicked + 1);
  };

  return (
    <div className="container-flex">
      <div className="container-inline">
        <div className="grid-container">
          <Tile emoji={"😊"} incrementClicked={incrementClicked} />
        </div>
      </div>
    </div>
  );
}

export default App;
