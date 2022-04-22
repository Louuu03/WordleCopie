import React from "react";
import '../App.css'

export const Finished=(props)=>{
    const row=props.row;
    return(
        <div className="finished">
            You get the right word in {row} attempts.
        </div>
    )
}