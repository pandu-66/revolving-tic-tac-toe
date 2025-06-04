import { useState } from 'react';
import GridBox from './GridBox';
import checkWin from './help';
// const trackIndxs=[];

export default function Grid({gridSize, players, winner, setWinner}) {
    const [active, setActive] = useState(0);
    const [board, setBoard] = useState(Array.from({ length: gridSize }, () => Array(gridSize).fill(null)));
    const [trackIndxs, setTrackIndxs] = useState([]);
    // const players = ['O', 'X'];

    const onSelect = (row, col)=>{
        if(board[row][col]||winner) return;
        if(trackIndxs.length==players.length*3){
            board[trackIndxs[0][0]][trackIndxs[0][1]] = null;
            setBoard([...board]);
            trackIndxs.shift();
            setTrackIndxs([...trackIndxs]);
        }
 
        setTrackIndxs([...trackIndxs, [row, col]]);
        board[row][col] = players[active];
        setBoard([...board]);

        if(checkWin(row, col, board)){
            setWinner(players[active]);
        }
        setActive((prevAct)=> (prevAct+1)%players.length);
    }

    const newGame = ()=>{
        setBoard(Array.from({ length: gridSize }, () => Array(gridSize).fill(null)));
        setWinner(null);
        setTrackIndxs([]);
        setActive(0);
    }

    return (
        <>
        <div className="Grid" style={{gridTemplateColumns:`repeat(${gridSize}, 80px)`}}>
            {board.map((r, idx) =>
            r.map((c, idx1) => <GridBox key={`${idx} ${idx1}`} id={`${idx} ${idx1}`} value={board[idx][idx1]} onClick={onSelect}
            shouldFade={(trackIndxs.length==players.length*3)&&(trackIndxs[0][0]===idx)&&(trackIndxs[0][1]===idx1)} />))}

            {(winner)&&
                <div className='over-lay'><button className="retry-game" onClick={newGame}><i className="fa-solid fa-arrow-rotate-right"></i> New Game</button></div>
            }
        </div>
        <div className='activity'>
            {players.map((ele, idx)=> <span className={`${ele} ${(idx==active)?"active":""}`} key={idx}>{ele}</span> )}
        </div>
        </>
    );
}
