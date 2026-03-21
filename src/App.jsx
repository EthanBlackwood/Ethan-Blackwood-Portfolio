import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './Navigation';
import Home from './Home';

function App() {
  return (
    <Router>
      <Navigation />

      <Routes>
        <Route path = "/" element = {<Home />} />     
        
        
        </Routes>

    </Router>


  );
}

export default App;