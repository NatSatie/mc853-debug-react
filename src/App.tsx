import React from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './Counter';
import CounterCustom from './Counter';

function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <Counter />
      <CounterCustom />
    </div>
  );
}

export default App;
