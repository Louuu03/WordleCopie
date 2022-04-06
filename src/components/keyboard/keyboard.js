import React from "react";
import './keyboard.css';

export function Keyboard(props){
    const keyboard={
        first:["Q","W","E","R","T","Y","U","I","O","P"],
        second:["A","S","D","F","G","H","J","K","L"],
        last:["Z","X","C","V","B","N","M"]
    }
    

    return(
        <div className="keyboard">
            <div className="centerK">
                <div className="first row">
                </div>
                <div className="second row">
                </div> 
                <div className="last row">
                </div>           
            </div>
        </div>
    )
}