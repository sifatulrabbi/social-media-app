import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Home from './components/pages/Home';
import Navbar from './components/Navbar';
import Profile from './components/pages/Profile';
import Footer from './components/Footer';
import Login from './components/pages/Login';
import Register from './components/pages/Register';
import Feeds from './components/pages/Feeds';
import Colleagues from './components/pages/Colleagues';
import AuthContextProvider from './contexts/AuthContext';
import FeedContextProvider from './contexts/FeedContext';
import NotificationProvider from './contexts/NotificationContext';

function App() {
  return (
    <NotificationProvider>
      <AuthContextProvider>
        <Navbar />
        <FeedContextProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/feed" element={<Feeds />} />
            <Route path="/colleagues" element={<Colleagues />} />
          </Routes>
        </FeedContextProvider>
        <Footer />
      </AuthContextProvider>
    </NotificationProvider>
  );
}

export default App;
