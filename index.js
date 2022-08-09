
/* Importing the fs module. */
const fs = require("fs")

/* A dependency that allows the user to interact with the CLI. */
const inquirer = require("inquirer")

/* Creating a connection to the database. */
const mysql = require("mysql2")


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


async function init() {
    let responses = await inquirer.prompt(initApp)  
}

init()
