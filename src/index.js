import React, { useDebugValue, useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

function Square(props) {
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
}

function Row(props) {
  const squares = props.indexes.map(
    (index) => <Square
      value={props.squares[index]}
      onClick={() => props.onClick(index)}
      key={index}
    />
  )
  console.log(squares)
  return (
    <div className="board-row">
      {squares}
    </div>
  )
}

function Board(props) {
  var grid = new Array(6);
  for (var i = 0; i < grid.length; i++) {
    grid[i] = new Array(5);
  }

  var count=0

  for (var i = 0; i < grid.length; i++) {
    for (var j = 0; j < grid[0].length; j++) {
      grid[i][j] = count;
      count+=1;
    }
  }
  //const grid = [
   // [0, 1, 2],
   // [3, 4, 5],
   // [6, 7, 8],
  //]

  const rows = grid.map((indexes) =>
    <Row
      indexes={indexes}
      squares={props.squares}
      onClick={props.onClick}
      key={indexes}
    />
  )
  return (
    <div>
      {rows}
    </div>
  );
}

function App() {
  const [sq, setS] = useState({
    squares: Array(30).fill(null),
  })
  const [xIsNext, setXIsNext] = useState(true)
  

  function handleClick(i) {
    var squares = sq.squares.slice();
    squares[i] = xIsNext ? 'X' : 'O';
    const newSquares = {
      squares,
    }
    setXIsNext(!xIsNext)
    setS(newSquares)
  }

  return (
    <div className="game">
      <div className="game-board">
        <Board
          squares={sq.squares}
          onClick={(i) => handleClick(i)}
        />
      </div>
      <div className="game-info">
      </div>
    </div>
  );

}

// ========================================

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);


