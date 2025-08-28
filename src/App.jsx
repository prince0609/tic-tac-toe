import { useState } from 'react'
import './App.css'
import Board from './components/Board'

function App() {

  return (
    <div className="app">
      <h1>Tic Tac Toe</h1>
      <Board />
    </div>
  )
}


export default App
