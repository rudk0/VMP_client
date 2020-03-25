import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Header} from "./components/Header/Header";
import {Page} from "./components/Page/Page";

function App() {
  return (
    <div className="App">
      <Header/>
      <Page/>
    </div>
  );
}

export default App;
