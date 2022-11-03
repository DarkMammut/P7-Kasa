import React from 'react';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About/about.jsx';
import Rental from './pages/Rental/rental.jsx';
import PageNotFound from './pages/404/404.jsx';
import Header from './components/header.jsx';
import Footer from './components/footer.jsx';
import { createRoot } from 'react-dom/client';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>

        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/:id" element={<Rental />} />
        <Route path="*" element={<PageNotFound />} />
        <Route path="/404" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>
);
