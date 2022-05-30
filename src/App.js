import { useState } from 'react';
import { Column } from './components/Column';
import './App.css';

export default function App() {
  const [board, setBoard] = useState(Array(7).fill().map(() => Array(7).fill('')));
  const [player, setPlayer] = useState("red");

  return (
    <div className="App">
      {board.map((col, i) => {
        return <Column key={`column${i}`} values={col} />
      })}
      </div>
  );
}
