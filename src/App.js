import React from 'react';
import './App.css';

import Wizard from './wizard';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Wizard
        </p>
      </header>
      <main className="App-main">
        <Wizard/>
      </main>
      <footer className="App-footer">
      - dwg -
      </footer>
    </div>
  );
}

export default App;
