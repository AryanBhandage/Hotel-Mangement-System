// Booking.js
import React, { useEffect, useState } from 'react';
import axios from 'axios'; // Make sure to import axios
import './Booking.css';
import logo from '../images/logo.png';

const Booking = () => {
   const [name, setName] = useState('');
   const [mobile, setMobile] = useState('');
   const [roomType, setRoomType] = useState('');
   const [checkin, setCheckin] = useState('');
   const [checkout, setCheckout] = useState('');

   const getQueryParam = (param) => {
      const urlParams = new URLSearchParams(window.location.search);
      return urlParams.get(param);
   };

   useEffect(() => {
      const roomTypeParam = getQueryParam('room');
      if (roomTypeParam) {
         setRoomType(roomTypeParam);
      }
   }, []);

   const handleSubmit = async (e) => {
      e.preventDefault();
      try {
         const response = await axios.post('http://localhost:5000/api/bookings', {
            name,
            mobile,
            roomType,
            checkin,
            checkout,
         });
         console.log(response.data.message);
         alert('Booking submitted successfully!');
      } catch (error) {
         console.error('Error submitting booking:', error.response?.data || error);
         alert('There was an error submitting your booking. Please try again.');
      }
   };

   return (
      <div>
         <section className="booking">
            <h1>Book Your Stay</h1>
            <form id="bookingForm" onSubmit={handleSubmit}>
               <div className="form-group">
                  <label htmlFor="name">Full Name:</label>
                  <input
                     type="text"
                     id="name"
                     required
                     placeholder="Enter your full name"
                     value={name}
                     onChange={(e) => setName(e.target.value)}
                  />
               </div>
               <div className="form-group">
                  <label htmlFor="mobile">Mobile Number:</label>
                  <input
                     type="tel"
                     id="mobile"
                     required
                     placeholder="Enter your mobile number"
                     value={mobile}
                     onChange={(e) => setMobile(e.target.value.replace(/[^0-9]/g, ''))}
                  />
               </div>
               <div className="form-group">
                  <label htmlFor="roomType">Room Type:</label>
                  <select
                     id="roomType"
                     required
                     value={roomType}
                     onChange={(e) => setRoomType(e.target.value)}
                  >
                     <option value="" disabled>Select a room type</option>
                     <option value="single">Single Room</option>
                     <option value="double">Double Room</option>
                     <option value="suite">Suite</option>
                  </select>
               </div>
               <div className="form-group">
                  <label htmlFor="checkin">Check-in Date:</label>
                  <input
                     type="date"
                     id="checkin"
                     required
                     value={checkin}
                     onChange={(e) => setCheckin(e.target.value)}
                  />
               </div>
               <div className="form-group">
                  <label htmlFor="checkout">Check-out Date:</label>
                  <input
                     type="date"
                     id="checkout"
                     required
                     value={checkout}
                     onChange={(e) => setCheckout(e.target.value)}
                  />
               </div>
               <button type="submit" className="btn full-width">Submit</button>
            </form>
         </section>

         <footer>
            <p>&copy; 2024 Luxurious Hotel. All rights reserved.</p>
         </footer>
      </div>
   );
};

export default Booking;
