import React from "react";
import './info.css';


export function Info (props){
    const displayAll= props.displayStyle;
    const infoOn={display:displayAll};
    return(
        <div className="info" style={infoOn}>
        <div className="center">    
            <div className="titleI">
            <h2>How To Play</h2>
            <img src={require("../icon/close.png")} alt="close" />
            </div>
            <p>Guess the WORDLE in six tries. <br /> 
            Each guess must be a valid five-letter word. Hit the enter button to submit. <br />
            After each guess, the color of the tiles will change to show how close your guess was to the word.</p>
            <hr />
            <h3>Example</h3>
            <div>
                
            </div>
            <p>A new WORDLE will be available each day!</p>
        </div>
        </div>
    )
}
