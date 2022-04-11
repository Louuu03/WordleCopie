import React, {useContext} from "react";
import { AppContext } from "../../App";

export function Keys(props){
    const {insertLetter}= useContext(AppContext);
    const keyValue=props.keyValue;
    const setInsertLetter=()=>insertLetter(keyValue);
   return(
       <div onClick={setInsertLetter} className='key' >{keyValue}</div>
   )


}