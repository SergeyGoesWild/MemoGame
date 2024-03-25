import { useEffect, useState } from "react";
import "./App.css";
import Tile from "./components/Tile";
let b = [];
function App() {
  const [emojis, setEmojis] = useState(["😊", "🥳", "😎"]);

  const handleClick = () => {
    let newEmoji = "🎁";
    setEmojis([...emojis, newEmoji]);
    console.log("From state : ", emojis);
    b = b.concat([newEmoji]);
    console.log("From var : ", b);
  };
  return (
    <div className="container-flex">
      <ul>
        {emojis.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
      <button onClick={handleClick}>Add</button>
    </div>
  );
}

export default App;
