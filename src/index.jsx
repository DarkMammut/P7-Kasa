import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About/about.jsx';
import Header from './components/header.jsx'
import Footer from './components/footer.jsx'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Header/>
      <Route exact path="/">
          <Home/>
      </Route>
      <Route path="/about">
          <About/>
      </Route>
      <Footer/>
    </Router>
  </React.StrictMode>,
document.getElementById('root')
);

