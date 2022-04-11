import React, { useContext } from "react";
import { AppContext } from "../../App";





export const Letter=(props)=>{
    const boardCol=props.boardCol;
    const boardRow=props.boardRow;
    const {board, type, col, row, correct}=useContext(AppContext); 
    const current=board[boardRow][boardCol];
    const start=row>0;
    
    const green=current===correct[boardCol];
    const orange=correct.includes(current);
    const color=start&&row-1>=boardRow&&(green?'green':orange?'orange':'gray');
   



    const typeAnimation=row===boardRow&&boardCol===col-1&&type===true && 'typed';




    return(
        <div key='nope' className={`col ${typeAnimation} ${color}`} >{board[boardRow][boardCol]}</div>
    )
}
    
    
