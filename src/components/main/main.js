import React from "react";
import './main.css';

export function Main (props){
    let lines=[];
    let inside=[[],[],[],[],[],[]];
    const rows=['RA','RB','RC','RD','RE','RF'];
    const columns=['a','b','c','d','e'];
    const A0=props.A0;
    const A1=props.A1;
    const A2=props.A2;
    const A3=props.A3;
    const A4=props.A4;
    const A5=props.A5;
    const ans=[A0,A1,A2,A3,A4,A5];
    
    for(let i=0; i<6;i++){
        for(let j=0; j<5;j++){
                inside[i].push(<div className={columns[j]}>
                    {ans[i][j]}
                </div>)
        }
    }

    for(let i=0; i<6;i++){
        lines.push(
        <div className={rows[i]}>
            {inside[i]}
        </div>
        )
    }

    return(
        <div className="main">
            <div className="centerM">
                {lines}                
            </div>
        </div>
    )
}