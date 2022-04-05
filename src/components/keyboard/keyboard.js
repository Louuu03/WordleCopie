import React from "react";
import './keyboard.css';

export function Keyboard(props){
    const keyboard={
        first:["Q","W","E","R","T","Y","U","I","O","P"],
        second:["A","S","D","F","G","H","J","K","L"],
        last:["Z","X","C","V","B","N","M"]
    }
    const line=(row)=>{
        let KB=row.map(letter=>
            <div className='letter' id={letter} onClick={handleClick}>
                {letter}
            </div>)
        return (KB)
    }
    const setA0=props.setA0;
    const setA1=props.setA1;
    const setA2=props.setA2;
    const setA3=props.setA3;
    const setA4=props.setA4;
    const setA5=props.setA5;
    const setAns=[setA0,setA1,setA2,setA3,setA4,setA5];
    const A0=props.A0;
    const A1=props.A1;
    const A2=props.A2;
    const A3=props.A3;
    const A4=props.A4;
    const A5=props.A5;
    const ans=[A0,A1,A2,A3,A4,A5];
    const correct=props.correct;
    
    let input=props.input;
    const row=props.row;
    const setRow=props.setRow;
    const col=props.col;
    const setCol=props.setCol;
    const typeAni={
        0:[],
        1:[],
        2:[],
        3:[],
        4:[],
        5:[],
    }

    function type(col,row){
        if(col===0){
            setAns[row](prev=>[input]);

        }else if(col<5){
        setAns[row](prev=>[...prev,input]);
        }
    }
    const handleClick=(e)=>{
        input =e.target.innerHTML;
        type(col,row);
        if(col<5){
        setCol(col+1);
        }
        console.log(col);
    }
    const handleBack=()=>{
        if(col>0){
        let remove=ans[row][col-1];
        let newArr=ans[row].filter(word => word!==remove);
        console.log('Remove='+remove);
        console.log('New='+newArr);
        setCol(col-1);
        setAns[row](newArr);   
        }else if(col===0){
            let remove=ans[row][col-1];
            let newArr=ans[row].filter(word => word!==remove);
            console.log('Remove='+remove);
            console.log('New='+newArr);
            setAns[row](newArr);   
        }
    }

    const handleEnter=()=>{
        if(col===5){
            check();
            setRow(row+1);
            setCol(0);   
        }else{
            warn();
        }
    }
    
    const warn=()=>{

    }
    const check=()=>{
        for(let i=0; i<6;i++){
            if(ans[row][i]===correct[i]){
                green()
            }
        }
    }
    const green=()=>{
        
    }



    return(
        <div className="keyboard">
            <div className="centerK">
                <div className="first row">
                 {line(keyboard.first)}     
                </div>
                <div className="second row">
                {line(keyboard.second)}  
                </div> 
                <div className="last row">
                    <div className="enter" onClick={handleEnter}>ENTER</div>
                    {line(keyboard.last)} 
                    <div className="back" onClick={handleBack}>
                        <div>
                        <img src={require("../icon/backspace.png")} alt='back'/>
                        </div>
                    </div>    
                </div>           
            </div>

        </div>
    )
}