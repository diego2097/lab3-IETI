import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Login} from "./components/Login"
import TemporaryDrawer from "./components/navBar"
function App() {
  return (
    <div className="App">
        <Login />
        <TemporaryDrawer />
    </div>
  );
}

export default App;
