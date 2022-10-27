import React from 'react';
import './index.css';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About/about.jsx';
import Header from './components/header.jsx'
import Footer from './components/footer.jsx'
import { createRoot } from 'react-dom/client';


const container = document.getElementById('root');
const root = createRoot(container);

root.render(
<React.StrictMode>
  <Router>
    <Header/>
    <Routes>
      <Route exact path="/" element={<Home/>} />
      <Route path="/about" element={<About/>} />
    </Routes>
    <Footer/>
  </Router>
</React.StrictMode>
);

