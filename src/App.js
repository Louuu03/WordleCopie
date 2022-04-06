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

  return (
    <div className="App">
      <Nav  />
      <List  />
      <Info />
      <Stat />
      <Settings />
      <Main  />
      <Keyboard />
    </div>
  );
}

export default App;
