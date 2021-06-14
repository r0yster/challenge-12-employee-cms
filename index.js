const inquirer = require('inquirer');
const { exitCode, allowedNodeEnvironmentFlags } = require('process');
const db = require('./db/connection');
const cTable = require('console.table');

// View Functions
function viewDepartments() {
    const sql = `SELECT name AS Department_Name, id AS Department_Id 
                 FROM department`;

    db.query(sql, (err, rows) => {
        if (err) throw err;
        console.log('');
        console.table(rows);
    });

    appInit();
};

function viewRoles() {
    const sql = `SELECT emp_roles.title AS Job_Title, emp_roles.id AS Role_Id, 
                    department.name AS Department, emp_roles.salary AS Salary 
                 FROM emp_roles 
                 INNER JOIN department 
                 ON emp_roles.department_id = department.id 
                 ORDER BY role_id`;

    db.query(sql, (err, rows) => {
        if (err) throw err;
        console.log('');
        console.table(rows);
    });

    appInit();
};

function viewEmployees() {
    const sql = `SELECT e.id AS Employee_Id, e.first_name AS First_Name, e.last_name AS Last_Name, emp_roles.title AS Title,
                 department.name AS Department, emp_roles.salary AS Salary, CONCAT(m.first_name,' ',m.last_name) AS Manager
                 FROM employee e inner join emp_roles
                 ON emp_roles.id = e.role_id
                 LEFT JOIN employee m
                 ON m.id = e.manager_id
                 INNER JOIN department
                 ON department.id = emp_roles.department_id
                 ORDER BY department, manager, first_name`;

    db.query(sql, (err, rows) => {
        if (err) throw err;
        console.log('');
        console.table(rows);
    });

    appInit();
};

// // Add Functions
function addDepartment() {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'dpt_name',
            message: 'Please enter new department name:'
        }
    ]).then( newDepartment => {
        const sql = `INSERT INTO department (name) VALUES (?)`;
        const params = newDepartment.dpt_name;

        db.query(sql, params, (err, result) => {
            if (err) throw err;
            console.log('New Department Added');
            appInit();
        });
    });
};

function addRole() {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'Please enter new role name:'
        },
        {
            type: 'input',
            name: 'salary',
            message: 'Please enter new role salary:'
        },
        {
            type: 'input',
            name: 'id',
            message: 'Please enter new role department (department id):'

        }
    ])
    .then( newRole => {
        const sql = `INSERT INTO emp_roles (title, salary, department_id) VALUES (?, ?, ?)`;
        const params = [newRole.title, newRole.salary, newRole.id];

        db.query(sql, params, (err, result) => {
            if (err) throw err;
            console.log('New role Added');
            appInit();
        });
    });
};

function addEmployee() {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'f_name',
            message: 'Enter new employees First Name:'
        },
        {
            type: 'input',
            name: 'l_name',
            message: 'Enter new employees Last Name:'
        },
        {
            type: 'input',
            name: 'role',
            message: 'Enter new employees role (role id):'
        },
        {
            type: 'input',
            name: 'manager',
            message: 'Enter new employees manager (employee id):'
        }
    ])
    .then(newEmployee => {
        const sql  = `INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)`;
        const params = [newEmployee.f_name, newEmployee.l_name, newEmployee.role, newEmployee.manager];

        db.query(sql, params, (err, result) => {
            if (err) throw err;
            console.log('New Employee Added');
            appInit();
        });
    });
};

function appInit() {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'action',
            pageSize: '9',
            message: 'What would you like to do?',
            choices: ['View all departments', 'View all roles', 'View all employees', 'Add a department',
                        'Add a role', 'Add an employee', 'Update an employee role', 'Exit'],
            default: 'Exit'
        }
    ])
    .then( data => {
        let choice = data.action;
        switch (choice) {
            case "View all departments":
                viewDepartments();
                break;
            case "View all roles":
                viewRoles();
                break;
            case "View all employees":
                viewEmployees();
                break;
            case "Add a department":
                addDepartment();
                break;
            case "Add a role":
                addRole();
                break;
            case "Add an employee":
                addEmployee();
                break;
            case "Exit":
                process.exit(1);
        }
        
    })
};


appInit();