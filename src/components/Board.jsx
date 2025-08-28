import React from 'react'
import Square from './Square'
import './Board.css'

function Board() {
  const [turn, setTurn] = React.useState('X');
  const [value, setValue] = React.useState(Array(9).fill(null));
  const [clicks, setClicks] = React.useState(0);

  function handleClick(index) {
    if(!value[index]) {
      const newValue = [...value];
      newValue[index] = turn;
      setValue(newValue);
      setClicks(clicks + 1);
      setTurn(turn === 'X' ? 'O' : 'X');
    }
    checkWinner();
  }

  function checkWinner() {
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
      if (value[a] && value[a] === value[b] && value[a] === value[c]) {
        alert(`Player ${value[a]} wins!`);
        resetGame();
        return;
      }
    }

    if (clicks === 9) {
      alert("It's a draw!");
      resetGame();
    }
  }

  function resetGame() {
    setValue(Array(9).fill(null));
    setClicks(0);
    setTurn('X');
  }       

  return (
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
  )
}

export default Board
