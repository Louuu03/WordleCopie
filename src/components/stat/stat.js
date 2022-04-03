import React from "react";
import './stat.css';

export function Stat (props){
    const displayAll= props.displayStyle;
    const statOn={display:displayAll};
    return(
        <div className="stat" style={statOn}>
            <div className="centerS">
            <div className="titleI">
            <h2>Statistic</h2>
            <img src={require("../icon/close.png")} alt="close" />
            </div>
            </div>
        </div>
    )
}
