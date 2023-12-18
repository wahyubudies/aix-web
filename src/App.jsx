import React from 'react';
import Home from './pages/Home/Home';
import List from './pages/List/List';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/list" element={<List />} />
      </Routes>
    </Router>
  );
}
export default App;