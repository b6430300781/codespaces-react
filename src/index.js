import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Hello from './Hello';
import Counter from './Counter';
import Bmi from './bmi';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Bmi/>
    {/*<Counter/>
    <Hello name="Maleena Mindo" age={21}/>
    <Hello name="Kanoknan Junyalak" age={20}/>
    <Hello name="Aunchisa Numnoi" age={20}/>
    <Hello name="Johny!!"/>
<Hello age={18}/>*/}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
