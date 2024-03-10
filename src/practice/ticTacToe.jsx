import { useState } from 'react';
import "./App.css"
const App = () => {
    const initialBoard = Array(9).fill(null);
    const [board, setBoard] = useState(initialBoard);
    const [isXNext, setIsXNext] = useState(true);
    const winner = calculateWinner(board);

    const handleClick = (index) => {
        if (board[index] || winner) return;

        const newBoard = [...board];
        newBoard[index] = isXNext ? 'X' : 'O';
        setBoard(newBoard);
        setIsXNext(!isXNext);
    };

    const renderSquare = (index) => (
        <button className="square" onClick={() => handleClick(index)}>
            {board[index]}
        </button>
    );

    const resetGame = () => {
        setBoard(initialBoard);
        setIsXNext(true);
    };

    return (
        <div className="game">
            <div className="board">
                <div className="row">{[0, 1, 2].map((index) => renderSquare(index))}</div>
                <div className="row">{[3, 4, 5].map((index) => renderSquare(index))}</div>
                <div className="row">{[6, 7, 8].map((index) => renderSquare(index))}</div>
            </div>
            <div className="info">
                <div>{winner ? `Winner: ${winner}` : `Next Player: ${isXNext ? 'X' : 'O'}`}</div>
                <button onClick={resetGame}>Reset Game</button>
            </div>
        </div>
    );
};

function calculateWinner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
}

export default App;
