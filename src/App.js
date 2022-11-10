import { useState } from 'react';
import './App.css';
import { Crono } from './components.jsx/Crono';
import CronoReducer from './components.jsx/CronoReducer';
import CronoRedux from './components.jsx/CronoRedux';
import CronoRedux2 from './components.jsx/CronoRedux2';

function App() {
  
  return (
    <div className="app">
      {/* <Crono/> */}
      {/* <CronoReducer /> */}
      {/* <CronoRedux /> */}
      <CronoRedux2 />
    </div>
  );
}

export default App;
