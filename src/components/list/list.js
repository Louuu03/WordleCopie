import React, {useState} from "react";
import './list.css';


export function List (props){
    const displayAll= props.displayStyle;
    const [toggle, setToggle]=useState('none');
    const handleClick=()=>{
        if(toggle==='none'){
            setToggle('block');
        }else{
            setToggle('none');
        }
    }
    const listOn={display:displayAll};
    const contactOn={display:toggle};
    return(
        <div className="list" style={listOn}>
            <div className="title">
                <h2>Menu</h2>
                <img src={require("../icon/close.png")} alt="close" />
            </div>
            <a href="https://github.com/Louuu03" rel='noreferrer' target="_blank"><p>GitHub Page</p></a>
            <p onClick={handleClick}>Contact Me</p>
            <div className="links" style={contactOn}>
                <a href="https://codepen.io/louuu03" rel='noreferrer' target="_blank"><img src={require("../icon/codepen.png")} alt="codepen"/></a>
                <a href="https://www.linkedin.com/in/louc/" rel='noreferrer' target="_blank"><img src={require("../icon/linkedin.png")} alt="linkedin"/></a>
                <a href="https://twitter.com/Lou_yiw" rel='noreferrer' target="_blank"><img src={require("../icon/twitter.png")} alt="twitter"/></a>
            </div>
        </div>
    )
}