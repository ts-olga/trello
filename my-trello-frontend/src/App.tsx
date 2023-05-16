import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Board from './pages/Board/Board';
import Home from './pages/Home/Home';
import './App.css';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/board/:board_id" element={<Board />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
