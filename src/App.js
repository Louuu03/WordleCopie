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
  const [listT, setListT]=useState('none');
  const [infoT, setInfoT]=useState('none');
  const [statT, setStatT]=useState('none');
  const [settingsT, setSettingsT]=useState('none');

  const [row, setRow]=useState(1);
  const [col, setCol]=useState(1);
  const [input, setInput]=useState('');

  return (
    <div className="App">
      <Nav setListT={setListT} setInfoT={setInfoT}
       setSettingsT={setSettingsT} setStatT={setStatT}
       infoT={infoT} statT={statT} listT={listT} settingsT={settingsT} />
      <List displayStyle={listT} />
      <Info displayStyle={infoT}/>
      <Stat displayStyle={statT}/>
      <Settings displayStyle={settingsT}/>
      <Main input={input} setInput={setInput} row={row} setRow={setRow} column={col} setCol={setCol}/>
      <Keyboard input={input} setInput={setInput} row={row} setRow={setRow} column={col} setCol={setCol} />
    </div>
  );
}

export default App;
