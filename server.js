const express = require('express');
const mysql = require('mysql2');

const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Connect to database
const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: '2@Zeppelin2@',
        database: 'employee'
    },
    console.log('Connected to the employee database.')
);

// Query the database to test the connection
// db.query(`SELECT * FROM department`, (err, rows) => {
//     console.log(rows);
// });

// GET a single department
// db.query(`SELECT * FROM department WHERE id = 1`, (err, row) => {
//     if (err) {
//         console.log(err);
//     }
//     console.log(row);
// });

// Delete a department
// db.query(`DELETE FROM department WHERE id = ?`, 1, (err, result) => {
//     if (err) {
//         console.log(err);
//     }
//     console.log(result);
// });

// Create a candidate
// const sql = `INSERT INTO department (id, name) 
//               VALUES (?,?)`;
// const params = [1, 'Finance'];

// Default response for any other request (Not Found); should be last route in file
app.use((req, res) => {
    res.status(404).end();
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });