import './app.css'; // Ensure this is at the top of your App.jsx or entry point
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginRight from './components/LoginRight';
import LoginLeft from './components/LoginLeft';
import Dashboard from './components/Dashboard';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route 
          path="/" 
          element={
            <div className="login-container">
              <LoginLeft />  {/* Left side with image */}
              <LoginRight />  {/* Right side with form */}
            </div>
          } 
        />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
};

export default App;