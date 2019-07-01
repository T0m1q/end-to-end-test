import React from 'react';
import logo from './logo.svg';
import './App.css';


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
          {[1,2,3,4,5,6,7,8,9,10].map((item, key) => {
            return <div className="App-card">Card {item + 1}</div>
          })}
      </div>
      
    </div>
  );
}

export default App;
