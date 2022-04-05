import React, {useState} from 'react';
import './App.css';
import {Nav} from './components/navbar/nav'
import {Info} from './components/info/info';
import {List} from './components/list/list';
import {Settings} from './components/settings/settings';
import {Stat} from './components/stat/stat';
import {Main} from './components/main/main';
import {Keyboard} from './components/keyboard/keyboard'

function App() {
  const correct=['E','L','P','H','Y'];
  const [listT, setListT]=useState('none');
  const [infoT, setInfoT]=useState('none');
  const [statT, setStatT]=useState('none');
  const [settingsT, setSettingsT]=useState('none');

  const [row, setRow]=useState(0);
  const [col, setCol]=useState(0);
  let input='';
  const [A0, setA0]=useState([input]);
  const [A1, setA1]=useState([input]);
  const [A2, setA2]=useState([input]);
  const [A3, setA3]=useState([input]);
  const [A4, setA4]=useState([input]);
  const [A5, setA5]=useState([input]);

  return (
    <div className="App">
      <Nav setListT={setListT} setInfoT={setInfoT}
        setSettingsT={setSettingsT} setStatT={setStatT}
        infoT={infoT} statT={statT} listT={listT} settingsT={settingsT} />
      <List displayStyle={listT} />
      <Info displayStyle={infoT}/>
      <Stat displayStyle={statT}/>
      <Settings displayStyle={settingsT}/>
      <Main  
        A0={A0} setA0={setA0}
        A1={A1} setA1={setA1}
        A2={A2} setA2={setA2}
        A3={A3} setA3={setA3}
        A4={A4} setA4={setA4}
        A5={A5} setA5={setA5}
        row={row} setRow={setRow} col={col} setCol={setCol}/>
      <Keyboard 
        correct={correct}
        A0={A0} setA0={setA0}
        A1={A1} setA1={setA1}
        A2={A2} setA2={setA2}
        A3={A3} setA3={setA3}
        A4={A4} setA4={setA4}
        A5={A5} setA5={setA5}
        input={input}
        row={row} setRow={setRow} col={col} setCol={setCol} />
    </div>
  );
}

export default App;
