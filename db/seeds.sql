INSERT INTO department (department_name)
VALUES 
("Sales"),
("Customer Service"),
("Human Resources"),
("Manager");

INSERT INTO roles (title, salary, department_id)
VALUES 
("Sales Representative", 35000, 1),
("Sales Supervisor", 50000, 1),
("Customer Service Rep", 28500, 2),
("Customer Service Supervisor", 50000, 2),
("Human Resources Rep", 60000, 3),
("Human Resources Trainee", 55000, 3),
("Human Resources Lead", 65000, 3),
("Manager", 82000, NULL);

INSERT INTO employee (first_name, last_name, roles_id, manager_id)
VALUES 
("Tony", "Quinones", 50, NULL),
("Nate", "McIlvenny", 11, 50),
("Gilb", "Escobedo", 10, 50);