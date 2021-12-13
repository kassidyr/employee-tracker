const express = require('express');
const mysql = require('mysql2');
const inputCheck = require('./utils/inputCheck');
const DB = require('./utils/DB');
const {printTable} = require("console-table-printer");
const Routes = require("./routes");

DB.getdepartment().then(([rows]) => printTable(rows));

const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(Routes);


// Get all departments
// app.get('/api/department', (req, res) => {
//     const sql = `SELECT * FROM department`;
  
//     db.query(sql, (err, rows) => {
//         if (err) {
//             res.status(500).json({ error: err.message });
//         return;
//       }
//         res.json({
//             message: 'success',
//             data: rows
//         });
//     });
// });

// Get a single department
// app.get('/api/department/:id', (req, res) => {
//     const sql = `SELECT * FROM department WHERE id = ?`;
//     const params = [req.params.id];
  
//     db.query(sql, params, (err, row) => {
//         if (err) {
//             res.status(400).json({ error: err.message });
//             return;
//         }
//         res.json({
//             message: 'success',
//             data: row
//         });
//     });
// });

// Delete a candidate
// app.delete('/api/department/:id', (req, res) => {
//     const sql = `DELETE FROM department WHERE id = ?`;
//     const params = [req.params.id];
  
//     db.query(sql, params, (err, result) => {
//         if (err) {
//             res.statusMessage(400).json({ error: res.message });
//         } else if (!result.affectedRows) {
//             res.json({
//                 message: 'Department not found'
//             });
//         } else {
//             res.json({
//                 message: 'deleted',
//                 changes: result.affectedRows,
//                 id: req.params.id
//             });
//         }
//     });
// });

// // Create a department
// app.post('/api/department', ({ body }, res) => {
//     const errors = inputCheck(body, 'id', 'name');
//     if (errors) {
//         res.status(400).json({ error: errors });
//         return;
//     }
//     const sql = `INSERT INTO department (id, name)
//         VALUES (?,?)`;
//     const params = [body.id, body.name];

//     db.query(sql, params, (err, result) => {
//         if (err) {
//             res.status(400).json({ error: err.message });
//             return;
//         }
//         res.json({
//             message: 'success',
//             data: body
//         });
//     });
// });

// Default response for any other request (Not Found); should be last route in file
app.use((req, res) => {
    res.status(404).end();
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });