import React from "react";
import './nav.css'

export function Nav (props){
    const setInfoT=props.setInfoT;
    const infoT=props.infoT;
    const setListT=props.setListT;
    const listT=props.listT;
    const setStatT=props.setStatT;
    const statT=props.statT;
    const setSettingsT=props.setSettingsT;
    const settingsT=props.settingsT;

    const handleInfo=()=>{
        if(infoT==='none'){
            setInfoT('block');
        }else{
            setInfoT('none');
        }
    }
    const handleList=()=>{
        if(listT==='none'){
            setListT('block');
        }else{
            setListT('none');
        }
    }
    const handleStat=()=>{
        if(statT==='none'){
            setStatT('block');
        }else{
            setStatT('none');
        }
    }
    const handleSettings=()=>{
        if(settingsT==='none'){
            setSettingsT('block');
        }else{
            setSettingsT('none');
        }
    }
    return(
        <div className="nav">
            <div className="iconL icon">
                <img src={require("../icon/menu.png")} alt='menu' onClick={handleList}/>
                <img src={require("../icon/Q.png")} alt='info' onClick={handleInfo} />
            </div>
            <div className="mid">
            <h1>WORDLE</h1>    
            </div>
            <div className="iconR icon">
                <img src={require("../icon/rank.png")} alt='stat' onClick={handleStat}/>
                <img src={require("../icon/settings.png")} alt='settings' onClick={handleSettings}/>
            </div>
        </div>
    )
}