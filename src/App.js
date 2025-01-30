import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SideBar from './Components/SideBar/SideBar';
import Home from './Components/Home';
import Profile from './Components/Profile';
import Settings from './Components/Settings';
import Notification from './Components/Notification';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="app">
        <SideBar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/notification" element={<Notification />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
