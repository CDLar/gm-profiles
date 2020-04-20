import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import GmStats from './components/GmStats'

function App() {
  return (
      <GmStats />
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


