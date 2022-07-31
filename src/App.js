import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(5000);
  const [isBomb, setIsBomb] = useState(false);
  const handleBomb = () => {
    setIsBomb(!isBomb);
    setCount(5000);
  };
  return (
    <div className="App">
      {isBomb && <div>{`You have ${count / 1000} seconds to run`}</div>}
      {isBomb && <BombExplode setCount={setCount} count={count} />}
      <button onClick={handleBomb}>
        {isBomb ? "Difuse the Bomb" : "Start the bomb"}
      </button>
    </div>
  );
}

function BombExplode({ setCount, count }) {
  useEffect(() => {
    let interval = setInterval(() => setCount(count - 1000), 1000);
    return () => {
      clearInterval(interval);
    };
  });
  return count < 0 ? (
    <img
      src="https://media2.giphy.com/media/HhTXt43pk1I1W/giphy.gif"
      // width="480"
      // height="480"
      // frameBorder="0"
      // className="giphy-embed"
      // allowFullScreen
    />
  ) : (
    <img
      src="https://media2.giphy.com/media/ckCL6oQfuLUuVbB2OH/giphy.gif"
      // width="480"
      // height="480"
      // frameBorder="0"
      // className="giphy-embed"
      // allowFullScreen
    />
  );
}

export default App;
