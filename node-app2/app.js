const express = require('express');
const mysql = require('mysql2');
const app = express();
const port = 3000;
const db = mysql.createConnection({
 host: 'mysql-db',
 user: 'root',
 password: 'password',
 database: 'testdb'
});
db.connect((err) => {
 if (err) {
   console.error('Error connecting to database:', err);
   return;
 }
 console.log('Connected to MySQL database');
});
app.get('/', (req, res) => {
 res.send('Hello, Docker!');
});
app.listen(port, () => {
 console.log(`Server is running on port ${port}`);
});
