/* Importing the fs module. */
const fs = require("fs")

/* A dependency that allows the user to interact with the CLI. */
const inquirer = require("inquirer")

/* Creating a connection to the database. */
const mysql = require("mysql2")

/* This is a connection to the database. */
const db = require("./server")

/* Importing the figlet module. */
const figlet = require('figlet')

/* This will initialize the prompts to the user */
const initApp = [
    {
        type: "list",
        name: "initApp",
        message: "Welcome, please select an option below:",
        choices: [
            "View All Departments",
            "View All Roles",
            "View All Employees",
            "Add A Department",
            "Add A Role",
            "Add A Employee",
            "Update A Employee Role",
        ],
    },
];

const appOptions = [
    {
        type: "input",
        name: "addDept",
        message: "What is the name of the current department you are adding?",
    },
    {
        type: "input",
        name: "addRole",
        message: "What is the name of the role you are adding?",
    },
    {
        type: "input",
        name: "roleSalary",
        message: "What is the salary of the role?",
    },
    {
        type: "input",
        name: "roleDept",
        message: "Which department does the role belong to?",
    },
    {
        type: "input",
        name: "firstName",
        message: "What is the current employee's first name?",
    },
    {
        type: "input",
        name: "lastName",
        message: "What is the current employee's last name?",
    },
    {
        type: "input",
        name: "employeeRole",
        message: "What is the current employee's role?",
    },
    {
        type: "input",
        name: "employeeManager",
        message: "Who is the current employee's manager?",
    },
];




async function init() {
    console.log(figlet.textSync('Employee Tracker'));
    await inquirer.prompt(initApp).then((data, err) => {
        if (data.initApp === "View All Departments") {
            getDept()
        } else if (data.initApp === "View All Roles") {
            getRoles()
        } else if (data.initApp === "View All Employees") {
            getEmployees()
        } else if (data.initApp === "Add A Department") {
            addDept()
        } else if (data.initapp === "Add A Role") {
            addRole()
        } else if (data.initApp === "Add A Employee") {
            addEmployee()
        } else if (data.initApp === "Update A Employee Role") {
            updateRole()
        } else {
            console.log(err);
        }
    })
}

init()

function getDept() {
    console.log(`
    Get Departments Succesful
    `);
    db.query('SELECT * FROM departments', function (err, results) {
        if (err) {
            console.log(err)
        } else {
            console.table(results)
            init()
        }
    })
}

function getRoles() {
    console.log(`
    Get Roles Succesful
    `);
    db.query('SELECT * FROM roles', function (err, results) {
        if (err) {
            console.log(err)
        } else {
            console.table(results)
            init()
        }
    })
}

function getEmployees() {
    console.log(`
    Get Employees Succesful
    `);
    db.query('SELECT * FROM employees', function (err, results) {
        if (err) {
            console.log(err)
        } else {
            console.table(results)
            init()
        }
    })
}

