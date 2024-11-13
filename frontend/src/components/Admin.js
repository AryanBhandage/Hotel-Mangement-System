import React, { useEffect, useState } from 'react';
import logo from '../images/logo.png'; // Adjust the path if necessary
import './Admin.css'; // Ensure your CSS file is correctly linked

const Admin = () => {
    const [bookings, setBookings] = useState([]);
    const [message, setMessage] = useState('');

    useEffect(() => {
        const fetchBookings = async () => {
            try {
                const response = await fetch('http://localhost:5000/api/bookings');
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                setBookings(data);
            } catch (error) {
                setMessage(`Error: ${error.message}`);
            }
        };

        fetchBookings();
    }, []);

    return (
        <div className="container">
            <header>
                <nav className="navbar">
                    <div className="logo">
                        <img src={logo} alt="Hotel Logo" />
                    </div>
                    <ul className="nav-links">
                        <li><a href="/">Logout</a></li>
                    </ul>
                </nav>
            </header>

            <h1 className="booked-rooms-title">Booked Rooms</h1> {/* Booked Rooms header added separately */}

            <section className="admin">
                <div className="admin-content">
                    <div className="booking-list">
                        {message && <p className="error-message">{message}</p>}
                        {bookings.length > 0 ? (
                            bookings.map((booking) => (
                                <div key={booking.id} className="room-card">
                                    <h3 className="room-type">Room Type: {booking.roomType}</h3>
                                    <p className="owner">Name: {booking.name}</p>
                                    <p className="details">Mobile: {booking.mobile}</p>
                                    <p className="details">Check-in: {new Date(booking.checkin).toLocaleString()}</p>
                                    <p className="details">Check-out: {new Date(booking.checkout).toLocaleString()}</p>
                                </div>
                            ))
                        ) : (
                            <p>No bookings available.</p>
                        )}
                    </div>
                </div>
            </section>

            <footer>
                <p>&copy; 2024 Luxurious Hotel. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Admin;
