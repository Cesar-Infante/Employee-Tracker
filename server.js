/* This is importing the mysql2 package. */
const mysql = require('mysql2');

/* It takes a string as an argument and returns the string in magenta */
const outputMagentaText = (text) => console.log(`\x1b[35m${text}\x1b[35m`)

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

/* Telling the database to use the employerTracker_db database. */
db.query('USE employerTracker_db', err => err ? 
console.log(err) : outputMagentaText(`
DataBase connected successfully
`));

/* Exporting the database connection to the other files that need it. */
module.exports = db;
