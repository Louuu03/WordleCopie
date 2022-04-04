import React from "react";
import './main.css';

export function Main (props){
    let lines=[];
    let inside=[];
    const rows=['RA','RB','RC','RD','RE','RF'];
    const columns=['a','b','c','d','e'];
    
    for(let j=0; j<5;j++){
            inside.push(<div className={columns[j]} ></div>)
    }
    for(let i=0; i<6;i++){
        lines.push(
        <div className={rows[i]}>
            {inside}
        </div>
        )
    }

    const input=props.input;
    const setInput=props.setInput;
    const row=props.row;
    const setRow=props.setRow;
    const col=props.col;
    const setCol=props.setCol;


    return(
        <div className="main">
            <div className="centerM">
                {lines}                
            </div>
        </div>
    )



}