/* This is importing the mysql2 package. */
const mysql = require('mysql2');

/* This is creating a connection to the database. */
const db = mysql.createConnection(
  {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'employerTracker_db'
  },
  console.log(`Connected to the employerTracker_db database.`)
);

db.query('USE employerTracker_db', err => err ? 
console.log(err) : console.log('query successful'));

module.exports = db;
