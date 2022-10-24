import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About';
import Header from './components/header'

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Route exact path="/">
          <Home />
      </Route>
      <Route path="/about">
          <About />
      </Route>
    </Router>
  </React.StrictMode>
);

