import React from 'react'
import Square from './Square'
import './Board.css'

function Board() {
  const [turn, setTurn] = React.useState('X');
  const [value, setValue] = React.useState(Array(9).fill(null));
  const [clicks, setClicks] = React.useState(0);

  function handleClick(index) {
    if (!value[index]) {
      const newValue = [...value];
      newValue[index] = turn;
      const newClicks = clicks + 1;
      const nextTurn = turn === 'X' ? 'O' : 'X';

      setValue(newValue);
      setClicks(newClicks);
      setTurn(nextTurn);

      checkWinner(newValue, newClicks); // use the updated data
    }
  }

  function checkWinner(board, clickCount) {
    const winningCombinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (const combination of winningCombinations) {
      const [a, b, c] = combination;
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
          const result = document.getElementById("result");
          result.innerHTML = `<p>Player ${board[a]} wins!</p>`;
          result.classList.add("result")
          document.getElementById("turn").innerHTML = "";
          const squares = document.getElementsByClassName("square");
          for (let i = 0; i < squares.length; i++) {
            squares[i].disabled = true;
          }
          squares[a].disabled = false;
          squares[b].disabled = false;
          squares[c].disabled = false;
        return;
      }
    }

    if (clickCount === 9) {
      document.getElementById("result").innerHTML = `<p>It's a draw!</p>`;
      resetGame();
    }
  }

  function resetGame() {
    const result = document.getElementById("result");
    result.innerHTML = "";
    result.classList.remove("result")
    setValue(Array(9).fill(null));
    setClicks(0);
    setTurn('X');
    const squares = document.getElementsByClassName("square");
    for (let i = 0; i < squares.length; i++) {
      squares[i].disabled = false;
    }
    document.getElementById("turn").innerHTML = `<p>Current Turn: ${turn}</p>`;
  }       

  return (
    <div>
      <div id="board">
        <Square value={value[0]} index={0} onClick={handleClick} />
        <Square value={value[1]} index={1} onClick={handleClick} />
        <Square value={value[2]} index={2} onClick={handleClick} />
        <Square value={value[3]} index={3} onClick={handleClick} />
        <Square value={value[4]} index={4} onClick={handleClick} />
        <Square value={value[5]} index={5} onClick={handleClick} />
        <Square value={value[6]} index={6} onClick={handleClick} />
        <Square value={value[7]} index={7} onClick={handleClick} />
        <Square value={value[8]} index={8} onClick={handleClick} />
    </div>

    <div id="turn">
      <p>Current Turn: {turn}</p>
    </div>
    <div id="reset">
      <button onClick={resetGame}>Reset Game</button>
    </div>
    <div id="result">
    </div>
  </div>
)
}

export default Board
