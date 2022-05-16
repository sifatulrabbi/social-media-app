import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Home from './components/pages/Home';
import Navbar from './components/Navbar';
import Profile from './components/pages/Profile';
import Footer from './components/Footer';
import Login from './components/pages/Login';
import Register from './components/pages/Register';
import Feeds from './components/pages/Feeds';
import AuthContextProvider from './contexts/AuthContext';
import PostsContextProvider from './contexts/PostsContext';

function App() {
  return (
    <AuthContextProvider>
      <Navbar />
      <PostsContextProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/feed" element={<Feeds />} />
          <Route path="/colleagues" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </PostsContextProvider>
      <Footer />
    </AuthContextProvider>
  );
}

export default App;
