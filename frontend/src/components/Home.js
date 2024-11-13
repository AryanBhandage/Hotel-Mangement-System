// Home.js
import React, { useEffect } from 'react';
import './Home.css';
import logo from '../images/logo.png';
import feature1 from '../images/feature1.png';
import feature2 from '../images/feature2.png';
import feature3 from '../images/feature3.png';

const Home = () => {
   useEffect(() => {
      const banner = document.getElementById('banner');
      const handleScroll = () => {
         if (window.scrollY > 175) {
            banner.classList.add('blur');
         } else {
            banner.classList.remove('blur');
         }
      };

      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
   }, []);

   return (
      <div>
         <section className="hero" id="banner">
            <div className="hero-content">
               <h1>Experience Luxury & Comfort</h1>
               <p>Welcome to the ultimate destination for relaxation and indulgence.</p>
               <a href="/rooms" className="btn">Book Your Stay</a>
            </div>
         </section>

         <section className="features">
            <div className="feature">
               <img src={feature1} alt="Feature 1" />
               <h3>Premium Rooms</h3>
               <p>Elegantly designed rooms with breathtaking views.</p>
            </div>
            <div className="feature">
               <img src={feature2} alt="Feature 2" />
               <h3>Fine Dining</h3>
               <p>Gourmet meals crafted by world-class chefs.</p>
            </div>
            <div className="feature">
               <img src={feature3} alt="Feature 3" />
               <h3>Spa & Wellness</h3>
               <p>Revitalize your body and mind with our spa treatments.</p>
            </div>
         </section>

         <footer>
            <p>&copy; 2024 Luxurious Hotel. All rights reserved.</p>
         </footer>
      </div>
   );
};

export default Home;
