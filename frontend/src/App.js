// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Rooms from './components/Rooms';
import Login from './components/Login';
import Booking from './components/Booking';
import Admin from './components/Admin'; // Import the Admin component
import Navbar from './components/Navbar';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route 
          path="/admin" // This route now leads to the Admin component
          element={<Admin />} 
        />
        <Route 
          path="*" 
          element={
            <>
              <Navbar />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/rooms" element={<Rooms />} />
                <Route path="/login" element={<Login />} />
                <Route path="/booking" element={<Booking />} />
              </Routes>
            </>
          } 
        />
      </Routes>
    </Router>
  );
};

export default App;
