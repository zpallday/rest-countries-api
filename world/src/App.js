import React from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './components/Navbar'

function App() {
  return (
    <div className="App">
      <Nav/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <h1>Learn</h1>
      </header>
    </div>
  );
}

export default App;
