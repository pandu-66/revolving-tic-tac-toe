import Grid from './Grid.jsx';
import './App.css';
import { useState } from 'react';
function App() {
  const [gameStarted, setGameStarted] = useState(false);
  const [gameSettings, setGameSettings] = useState({gridSize: 3, players:['X', 'O']});
  const [selectedCount, setSelectedCount] = useState(2);
  const [winner, setWinner] = useState(null);


  const handleStart = ()=>{
    if(gameSettings.players.length>1) setGameStarted(true);
  }
  
  const handlePlayerSelect = (num)=>{
    const symbols = ['X', 'O', '△', '★'];
    setSelectedCount(num);
    setGameSettings({gridSize: num+1, players: symbols.slice(0, num)});
  }

  const handleBack = ()=>{
    setGameStarted(false);
    setWinner(null);
  }

  return (
    <div className='App'>
      <h1>Tic-Tac-Toe</h1>
      <h4>-Survival Mode</h4>
      {(!gameStarted)?<div>
        <div className="setup-form">
          <h2>Select Number of Players</h2>
          <div className="player-buttons">
            {[2, 3, 4].map(num => (
              <button
                key={num}
                onClick={() => handlePlayerSelect(num)}
                className={selectedCount === num ? 'selected' : ''}
              >
                {num} Players
              </button>
            ))}
          </div>


          <button onClick={handleStart} className="new-game-btn">Start Game</button>
        </div>
        </div>
        :
        <>
        <button className="new-game-btn" onClick={handleBack}><i className="fa-solid fa-arrow-left"></i> Back</button>
        <div className='board-container'>
          <Grid gridSize={gameSettings.gridSize} players={gameSettings.players} winner={winner} setWinner={setWinner} />
        </div>
        {winner&&<div>Player <span className={`${winner}`}>{winner}</span> Won the Game.</div>}
        </>
      }
    </div>
  );
}

export default App;
