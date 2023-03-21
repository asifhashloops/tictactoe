import "./App.css";
import Board from "./components/board/Board";
import { useState } from "react";
function App() {
  const WIN_CONDITIONS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xplaying, setXPlaying] = useState(true);
  const [scores, setScores] = useState({ oscore: 0, xscore: 0 });
  const handleClickBox = (idx) => {
    const updatedBoard = board.map((value, index) => {
      if (index == idx) {
        return xplaying ? "X" : "O";
      } else {
        return value;
      }
    });
    checkWinner(updatedBoard);
    setBoard(updatedBoard);
    setXPlaying(!xplaying);
  };

  const checkWinner = (board) => {
    console.log("checking winners");
    for (let i = 0; i < WIN_CONDITIONS.length; i++) {
      const [x, y, z] = WIN_CONDITIONS[i];
      console.log(board[x], board[y], board[z]);
      if (board[x] && board[x] === board[y] && board[y] === board[z]) {
        return board[x];
      }
    }
  };
  return (
    console.log("hey there sjdsd"),
    (
      <div className="App">
        <Board board={board} onClick={handleClickBox} />
        <p>hey there</p>
        <p>hey this is dev/asif</p>
      </div>
    )
  );
}

export default App;
