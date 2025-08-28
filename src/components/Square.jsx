import React from 'react'

function Square({value, index, onClick}) {
  
  return (
    <button className="square" onClick={() => onClick(index)}>
      {value}
    </button>
  )
}

export default Square
