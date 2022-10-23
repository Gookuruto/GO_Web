import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './home';
import NavigationBar from './navigation';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Fun from './fun';

function App() {
  return (
    <div>
      <NavigationBar/>
    </div>
  );
}

export default App;
