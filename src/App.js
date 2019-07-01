import React from 'react';
import logo from './logo.svg';
import './App.css';
import arrGenerator from './arrGenerator'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload the gun.
          It isn't working.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <div className="App-container">
          {arrGenerator(1000).map((item) => {
            return <div key={item} className="App-card">Card {item}</div>
          })}
      </div>
      
    </div>
  );
}

export default App;
