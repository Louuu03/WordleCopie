import React, {useCallback, useContext, useEffect} from "react";
import './keyboard.css';
import {keyboard} from '../variables';
import { AppContext } from "../../App";
import { Keys } from "./keys";


export function Keyboard(props){
    const { onEnter, onBack, insertLetter}= useContext(AppContext);
        
    const handleKeydown=useCallback(
        (key)=>{
            let type=key.key.toUpperCase();
            console.log(type);
            if(type==='ENTER'){
                onEnter();
            }else if(type==='BACKSPACE'){
                onBack();
            }else{
                keyboard.first.forEach(key=>{
                    if(type===key){
                        insertLetter(type);
                    }
                });
                keyboard.second.forEach(key=>{
                    if(type===key){
                        insertLetter(type);
                    }
                });
                
                keyboard.last.forEach(key=>{
                    if(type===key){
                        insertLetter(type);
                    }
                });
                    
                
            }

    },[insertLetter, onBack, onEnter])
        
    useEffect(()=>{
        
        document.addEventListener('keydown',handleKeydown);
        return()=>{
            document.removeEventListener('keydown', handleKeydown);
        }
    },  [handleKeydown]
    )

    return(
        <div className="keyboard" onKeyDown={handleKeydown}>
            <div className="centerK">
                <div className="first row">
                    {keyboard.first.map(key=>
                            {return <Keys keyValue={key} keyRow='first'/>}
                    )}
                </div>
                <div className="second row">
                    {keyboard.second.map(key=>
                            {return <Keys keyValue={key} keyRow='second' />}
                    )}
                </div> 
                <div className="last row">
                    <div className="enter" onClick={onEnter}>ENTER</div>
                    {keyboard.last.map(key=>
                            {return <Keys keyValue={key} keyRow='last'/>}
                    )}
                    <div className="back" onClick={onBack}>
                        <img src={require('../icon/backspace.png')} alt="back"/>
                    </div>
                </div>           
            </div>
        </div>
    )
}