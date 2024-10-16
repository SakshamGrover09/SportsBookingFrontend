import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Register from './components/Register';
import BookingForm from './components/BookingForm';
import MyBookings from './components/MyBookings';

const App = () => {
  document.body.style.backgroundImage="url('https://thumbs.dreamstime.com/z/seamless-illustration-theme-summer-sports-simple-icons-bright-outline-blue-background-pattern-85711943.jpg')"
  return (
    
    <Router>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<BookingForm />} />
        <Route path="/my-bookings" element={<MyBookings />} />
      </Routes>
    </Router>
  );
};

export default App;
