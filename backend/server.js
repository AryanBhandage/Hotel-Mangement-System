const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MySQL connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'hotel', // Replace with your MySQL username
    password: 'hotel', // Replace with your MySQL password
    database: 'hotel', // Replace with your database name
});

// Connect to MySQL
db.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL:', err);
        return;
    }
    console.log('Successfully connected to MySQL database');
});

// Endpoint to handle bookings
app.post('/api/bookings', (req, res) => {
    const { name, mobile, roomType, checkin, checkout } = req.body;
    const query = 'INSERT INTO bookings (name, mobile, roomType, checkin, checkout) VALUES (?, ?, ?, ?, ?)';

    db.query(query, [name, mobile, roomType, checkin, checkout], (error, results) => {
        if (error) {
            console.error('Error inserting booking:', error);
            return res.status(500).json({ message: 'Error inserting booking' });
        }
        res.status(200).json({ message: 'Booking successfully created!' });
    });
});

// Endpoint to fetch bookings
app.get('/api/bookings', (req, res) => {
   const query = 'SELECT * FROM bookings'; // Ensure the table name is correct
   db.query(query, (error, results) => {
       if (error) {
           console.error('Error fetching bookings:', error);
           return res.status(500).json({ message: 'Error fetching bookings' });
       }
       res.json(results); // Send the results back to the client
   });
});


// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
