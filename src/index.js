import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import GmStats from './components/GmStats'

function App() {
  return (
    <div className='app'>
      <GmStats />
    </div>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


