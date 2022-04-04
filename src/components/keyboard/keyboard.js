import React from "react";
import './keyboard.css';

export function Keyboard(props){
    const keyboard={
        first:["Q","W","E","R","T","Y","U","I","O","P"],
        second:["A","S","D","F","G","H","J","K","L"],
        last:["Z","X","C","V","B","N","M"]
    }
    const line=(row)=>{
        let KB=row.map(letter=>
            <div className='letter' id={letter}>
                {letter}
            </div>)
        return (KB)
    }

    const input=props.input;
    const setInput=props.setInput;
    const row=props.row;
    const setRow=props.setRow;
    const col=props.col;
    const setCol=props.setCol;



    return(
        <div className="keyboard">
            <div className="centerK">
                <div className="first row">
                 {line(keyboard.first)}     
                </div>
                <div className="second row">
                {line(keyboard.second)}  
                </div> 
                <div className="last row">
                    <div className="enter">ENTER</div>
                    {line(keyboard.last)} 
                    <div className="back">
                        <div>
                        <img src={require("../icon/backspace.png")} alt='back'/>
                        </div>
                    </div>    
                </div>           
            </div>

        </div>
    )
}