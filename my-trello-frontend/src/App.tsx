import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Board from './pages/Board/Board';
import './App.css';

function App() {
  return (
    <div>
      <h1>Hello</h1>
      <Router>
        <Routes>
          <Route path="/board" element={<Board />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
