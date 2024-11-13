require('dotenv').config();
const mysql = require('mysql2');

const db = mysql.createConnection({
   host: process.env.DB_HOST,
   user: process.env.DB_USER,
   password: process.env.DB_PASSWORD,
   database: process.env.DB_NAME,
});

// Connect to the database
db.connect((err) => {
   if (err) {
      console.error('Error connecting to MySQL:', err);
      return;
   }
   console.log('Successfully connected to MySQL database');
});

// Close the connection
db.end((err) => {
   if (err) {
      console.error('Error closing the MySQL connection:', err);
   } else {
      console.log('MySQL connection closed');
   }
});
