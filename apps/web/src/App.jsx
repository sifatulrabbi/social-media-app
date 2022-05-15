import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Home from './components/pages/Home';
import Navbar from './components/Navbar';
import Profile from './components/pages/Profile';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/feed" element={<Home />} />
        <Route path="/colleagues" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
