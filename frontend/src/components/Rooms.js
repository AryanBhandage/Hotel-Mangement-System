// Rooms.js
import React from 'react';
import './Rooms.css';
import room1 from '../images/room1.jpg';
import room2 from '../images/room2.jpg';
import room3 from '../images/room3.jpg';

const Rooms = () => {
   return (
      <div className="full-page">
         <section className="rooms">
            <h1>Our Rooms</h1>
            <div className="room-list">
               <div className="room">
                  <img src={room1} alt="Single Room" />
                  <div className="room-content">
                     <h3>Single Room</h3>
                     <p>Experience luxury and comfort in our Single Room. Perfect for solo travelers.</p>
                     <p className="price">$100/night</p>
                     <button className="btn book-btn" onClick={() => window.location.href = '/booking?room=single'}>
                        Book Now
                     </button>
                  </div>
               </div>
               <div className="room">
                  <img src={room2} alt="Double Room" />
                  <div className="room-content">
                     <h3>Double Room</h3>
                     <p>Experience luxury and comfort in our Double Room. Ideal for couples.</p>
                     <p className="price">$150/night</p>
                     <button className="btn book-btn" onClick={() => window.location.href = '/booking?room=double'}>
                        Book Now
                     </button>
                  </div>
               </div>
               <div className="room">
                  <img src={room3} alt="Suite" />
                  <div className="room-content">
                     <h3>Suite</h3>
                     <p>Experience unparalleled luxury in our Suite. Perfect for a lavish stay.</p>
                     <p className="price">$300/night</p>
                     <button className="btn book-btn" onClick={() => window.location.href = '/booking?room=suite'}>
                        Book Now
                     </button>
                  </div>
               </div>
            </div>
         </section>

         <footer>
            <p>&copy; 2024 Luxurious Hotel. All rights reserved.</p>
         </footer>
      </div>
   );
};

export default Rooms;
