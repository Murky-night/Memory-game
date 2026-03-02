import { GameHeader } from "./components/GameHeader"
import { Card } from "./components/Card";

function App() {

  const cardValues = [
  "🍎",
  "🍌",
  "🍇",
  "🍊",
  "🍓",
  "🥝",
  "🍑",
  "🍒",
  "🍎",
  "🍌",
  "🍇",
  "🍊",
  "🍓",
  "🥝",
  "🍑",
  "🍒",
  ];


  return (
    <div className="app">
      <GameHeader score={3} move={10} />

      <div className="cards-grid">
        {cardValues.map((card) => (
          <Card card={card} />
        ))}
      </div>
    </div>
  );
}

export default App
