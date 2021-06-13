const inquirer = require('inquirer');
const db = require('./db/connection');

// Check db connection
db.connect(err => {
    if (err) throw err;
    console.log('Database connected.')
});