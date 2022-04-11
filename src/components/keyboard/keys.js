import React, {useContext} from "react";
import { AppContext } from "../../App";
import { correct } from "../variables";

export function Keys(props){
    const {insertLetter,boardAll, row, green}= useContext(AppContext);
    const keyValue=props.keyValue;
    const setInsertLetter=()=>insertLetter(keyValue);
    const start=row>0;
    const colorGreen=green.includes(keyValue);

    const orange=boardAll.includes(keyValue)&&correct.includes(keyValue);
    const color=start&&boardAll.includes(keyValue)&&(colorGreen?'green':orange?'orange':'gray');

   return(
       <div onClick={setInsertLetter} className={`key ${color}`} >{keyValue}</div>
   )


}