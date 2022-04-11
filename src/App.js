import React, {useState, createContext} from 'react';
import './App.css';
import {Nav} from './components/navbar/nav'
import {Info} from './components/info/info';
import {List} from './components/list/list';
import {Settings} from './components/settings/settings';
import {Stat} from './components/stat/stat';
import {Main} from './components/main/main';
import {Keyboard} from './components/keyboard/keyboard'
import {correct, insert} from './components/variables';

export const AppContext=createContext();

function App() {
  const [row,setRow]=useState(0);
  const [col, setCol]=useState(0);
  const [board, setBoard]=useState(insert);
  const [type, setType]=useState(false);
  const [boardAll, setBoardAll]=useState(board[0]);
  const [green, setGreen]=useState(['']);


  const insertLetter=(keyValue)=>{
    if(col===-1){
      return;
    }
    setType(true);
    if(col<5){
        setCol(col+1);
        const newBoard=[...board];
    newBoard[row][col]=keyValue;
    setBoard(newBoard);
    }
  };
  const onBack=()=>{
    const newBoard=[...board];
    newBoard[row][col-1]='';
    setBoard(newBoard);
    if(col<=5 && col!==0){
        setCol(col-1);
        
    }
  };

  const onEnter=()=>{
    if(col!==5){
      console.log('Not enough letters');
    }else{
      if(row!==0){
              let newboardAll=[...boardAll];
              board[row].forEach(col=>col!==''&&newboardAll.push(col));
              setBoardAll(newboardAll);
      }
      const greenwords=[...green];
      for(let i=0; i<5;i++){
        if(board[row][i]===correct[i]){
          if(!green.includes(board[row][i])){
            greenwords.push(board[row][i]);
            setGreen(greenwords);
          }
        }
      }
      if(correct.join('')===board[row].join('')){
        console.log('hey');
        setCol(-1);
        setRow(row+1);
      }else{
        setCol(0);
        setRow(row+1);
      }
      
      
    } 
  };

  return (
    <div className="App">
      <Nav  />
      <AppContext.Provider value={{
        board,setBoard,
        row, setRow,
        col, setCol,
        insertLetter,
        onBack, onEnter,
        type,correct,
        boardAll,green
        }}>
      <List  />
      <Info />
      <Stat />
      <Settings />
      <Main  />
      <Keyboard />
      </AppContext.Provider>
    </div>
  );
}

export default App;
