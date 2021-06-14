const mysql = require('mysql2');

const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'employee_tracker'
    },
    console.log('Connected to employee_tacker database.')
);

module.exports = db;