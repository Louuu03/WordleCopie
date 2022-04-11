import React, {useState, createContext, useEffect} from 'react';
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
  const insertLetter=(keyValue)=>{
    setType(true);
    const newBoard=[...board];
    newBoard[row][col]=keyValue;
    setBoard(newBoard);
    if(col<5){
        setCol(col+1); 
    }
    
  };
  const onBack=()=>{
    setType(false);
    const newBoard=[...board];
    newBoard[row][col-1]='';
    setBoard(newBoard);
    if(col<=5 && col!==0){
        setCol(col-1);
    }
  };
  const onEnter=()=>{
    if(col!==5){
      console.log('Not enough letters')
    }else{
     /*  for(let i=0;i<5;i++)
      if(board[row][i]===correct[i]){
        
      }else if(){

      }else{

      } */
      setRow(row+1);
      setCol(0);
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
        type
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
