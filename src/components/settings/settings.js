import React from "react";
import './settings.css';

export function Settings (props){
    const displayAll= props.displayStyle;
    const settingsOn={display:displayAll};
    return(
        <div className="settings" style={settingsOn}>
            <div className="titleR">
            <h2>Settings</h2>
            <img src={require("../icon/close.png")} alt="close" />
            </div>
            <p>Dark Mode</p>
            <p>High Contrast Mode</p>
        </div>
    )
}