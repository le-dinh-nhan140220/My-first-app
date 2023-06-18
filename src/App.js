import logo from './logo.svg';
import React from 'react';
import './App.css';
import Table from './Table.jsx'
import Form from './Form.jsx';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >kh
          Learn React
        </a>
      </header> */}
      <h1>React App</h1>
      <Table/>
      <Form/>
    </div>
  );
}

export default App;
