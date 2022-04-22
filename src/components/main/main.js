import React from "react";
import './main.css';
import { Letter } from "./letters";

export function Main (){
    return(
        <div className="main">
            <div className="centerM">
                <div className="row0">
                    <Letter boardRow={0} boardCol={0}/>
                    <Letter boardRow={0} boardCol={1}/>
                    <Letter boardRow={0} boardCol={2}/>
                    <Letter boardRow={0} boardCol={3}/>
                    <Letter boardRow={0} boardCol={4}/>
                </div>
                <div className="row1">
                    <Letter boardRow={1} boardCol={0}/>
                    <Letter boardRow={1} boardCol={1}/>
                    <Letter boardRow={1} boardCol={2}/>
                    <Letter boardRow={1} boardCol={3}/>
                    <Letter boardRow={1} boardCol={4}/>
                </div>
                <div className="row2">
                    <Letter boardRow={2} boardCol={0}/>
                    <Letter boardRow={2} boardCol={1}/>
                    <Letter boardRow={2} boardCol={2}/>
                    <Letter boardRow={2} boardCol={3}/>
                    <Letter boardRow={2} boardCol={4}/>
                </div>
                <div className="row3">
                    <Letter boardRow={3} boardCol={0}/>
                    <Letter boardRow={3} boardCol={1}/>
                    <Letter boardRow={3} boardCol={2}/>
                    <Letter boardRow={3} boardCol={3}/>
                    <Letter boardRow={3} boardCol={4}/>
                </div>
                <div className="row4">
                    <Letter boardRow={4} boardCol={0}/>
                    <Letter boardRow={4} boardCol={1}/>
                    <Letter boardRow={4} boardCol={2}/>
                    <Letter boardRow={4} boardCol={3}/>
                    <Letter boardRow={4} boardCol={4}/>
                </div>
                <div className="row5">
                    <Letter boardRow={5} boardCol={0}/>
                    <Letter boardRow={5} boardCol={1}/>
                    <Letter boardRow={5} boardCol={2}/>
                    <Letter boardRow={5} boardCol={3}/>
                    <Letter boardRow={5} boardCol={4}/>
                </div>
            </div>
        </div>
    )

}
 