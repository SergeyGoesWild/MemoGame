import { useEffect, useState } from "react";
import "./App.css";
import Tile from "./components/Tile";

function App() {
  const [number, setNumber] = useState(0);

  const handleClick = () => {
    setNumber((number) => {
      number + 1;
      console.log(number);
    });
    //setNumber((number) => number + 1);
  };
  return (
    <div className="container-flex">
      <p>{number}</p>
      <button onClick={handleClick}>Print</button>
    </div>
  );
}

export default App;
