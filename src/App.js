import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header'; // Import your Header component
import Footer from './Components/Footer'; // Import your Footer component
import Home from './pages/Home'; // Import your Home component
import Menu from './pages/Menu'; // Import your Menu component
import About from './pages/About'; // Import your About component
import Contact from './pages/Contact'; // Import your Contact component

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
