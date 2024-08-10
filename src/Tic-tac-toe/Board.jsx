import Square from "./Square";
import React,{useState,UseEffect} from "react";

const Board=()=>{
    const[state,setState]=useState(Array(9).fill(null));
    const [isXTurn,setXIsTurn]=useState(true);
    const handleClick= (index)=>{
        if(state[index]!==null){
            return;
        }
        const copyState=[...state];
        copyState[index]=isXTurn?"X":"O";
        setState(copyState);
        setXIsTurn(!isXTurn);
    }
    const checkWinner=()=>{
        const winnerLogic=[
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6],
        ];
        for(let logic of winnerLogic){
            const [a,b,c]=logic;
            if(state[a]!==null&&state[a]===state[b]&&state[a]===state[c]){
            return state[a];
            }
        }
        return false;
    }
    console.log(checkWinner())
    const isWinner=checkWinner();
    const handleReset=()=>{
        setState(Array(9).fill(null));
    }
    return(
        <div className="board-container">
            {
                isWinner?<> Player {isWinner} won the Game <button onClick={handleReset}>Play Again</button></>:
                <>
                <h4 style={{marginBottom:"25px"}}>Player {isXTurn?"X":"O"} Turn </h4>
        <div className="board-row">
            <Square click={()=>handleClick(0)} value={state[0]}/>
            <Square click={()=>handleClick(1)} value={state[1]}/>
            <Square click={()=>handleClick(2)} value={state[2]}/>
        </div>
        <div className="board-row">
        <Square click={()=>handleClick(3)} value={state[3]}/>
        <Square click={()=>handleClick(4)} value={state[4]}/>
        <Square click={()=>handleClick(5)} value={state[5]}/>
        </div>
        <div className="board-row">
        <Square click={()=>handleClick(6)} value={state[6]}/>
        <Square click={()=>handleClick(7)} value={state[7]}/>
        <Square click={()=>handleClick(8)} value={state[8]}/>
            </div>    
            </>
}
        </div>
    )
}
export default Board;