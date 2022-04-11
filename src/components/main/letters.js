import React, { useContext } from "react";
import { AppContext } from "../../App";




export const Letter=(props)=>{
    const boardCol=props.boardCol;
    const boardRow=props.boardRow;
    const {board, type,col,row}=useContext(AppContext); 
    const color='color'+boardRow+boardCol;
    const flipAnimation='flip'+boardRow;
    const typeAnimation=row===boardRow&&boardCol===col-1&&type===true && 'typed';




    return(
        <div key='nope' className={`col ${typeAnimation} ${flipAnimation}`} id={color}>{board[boardRow][boardCol]}</div>
    )
}
    
    
