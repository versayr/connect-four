import { useState } from 'react';
import { Column } from './components/Column';
import { checkForWinner } from './utils';
import './App.css';

export default function App() {
  const [board, setBoard] = useState(Array(7).fill().map(() => Array(7).fill('')));
  const [player, setPlayer] = useState("red");
  const [lastMove, setLastMove] = useState({ x: -1, y: -1 });
  const [move, setMove] = useState(1);

  const makeMove = (col) => {
    const tmp = board.slice();
    if (move === 49) {
      alert('Game is a draw!');
    } else {
      for (const row in tmp[col]) {
        if (tmp[col][row] === '') {
          tmp[col][row] = player;
          break;
        }
      }

      setPlayer(player === "red" ? "black" : "red");
      setMove(move + 1);
      setBoard(tmp);
    }

  }

  return (
    <div className="App">
      {board.map((col, i) => {
        return (
          <Column 
          key={`column${i}`} 
          values={col} 
          index={i}
          makeMove={makeMove} 
        />
        )
      })}
        </div>
  );
}
