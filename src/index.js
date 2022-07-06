import React from 'react';
import ReactDom from 'react-dom';
import Home from './pages/Home';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';

ReactDom.render(
  <React.StrictMode>
    <Router>
      <Home />
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
);
