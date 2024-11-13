const express = require('express');
const mysql = require('mysql2');
const router = express.Router();
require('dotenv').config();

const db = mysql.createConnection({
   host: process.env.DB_HOST,
   user: process.env.DB_USER,
   password: process.env.DB_PASSWORD,
   database: process.env.DB_NAME,
});

// POST endpoint for bookings
router.post('/api/bookings', (req, res) => {
   const { name, mobile, roomType, checkin, checkout } = req.body;

   const query = 'INSERT INTO bookings (name, mobile, roomType, checkin, checkout) VALUES (?, ?, ?, ?, ?)';
   db.query(query, [name, mobile, roomType, checkin, checkout], (err, result) => {
      if (err) {
         console.error('Error inserting booking:', err);
         return res.status(500).json({ message: 'Error creating booking' });
      }
      res.status(201).json({ message: 'Booking created successfully', bookingId: result.insertId });
   });
});

module.exports = router;
