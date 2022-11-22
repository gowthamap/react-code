import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ListItem from './list/ListItem';
import Label from './list/Label';



ReactDOM.render(
  
  <div className="app"> 
    <div className="app-header">
      <span className="header-title">Code Malayalam</span>
      <span>Home</span>
      <span>Usage</span>
      <span>Settings</span>
      <span>Logout</span>
    </div>
    <div className="app-body">
      <div className="app-list">
        <ListItem />
        <Label />
        <ListItem />
        <Label />
        <ListItem />
        <Label />
        <ListItem /> 
        <Label />
      </div>
    </div>
  </div>,

  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
