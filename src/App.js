import React from 'react';
import './App.css';
import Tetris from './components/Tetris'

function App() {
  const style={
    color: "rgb(255, 0, 119)"
  }
  return (
    <div>
      <div className='why' style={{color: "rgb(255, 0, 119)"}} >
        hello
      </div>
      <Tetris />
    </div>
  );
}

export default App;
