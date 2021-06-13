DROP TABLE IF EXISTS employee;
DROP TABLE IF EXISTS emp_roles;
DROP TABLE IF EXISTS departments;

CREATE TABLE departments (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(30) NOT NULL
);

CREATE TABLE emp_roles (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(30),
    salary DECIMAL,
    department_id INT,
    CONSTRAINT fk_dept_id FOREIGN KEY (department_id) REFERENCES departments(id) ON DELETE SET NULL
);

CREATE TABLE employee (
    id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INT,
    manager_id INT,
    CONSTRAINT fk_role_id FOREIGN KEY (role_id) REFERENCES emp_roles(id) ON DELETE SET NULL,
    CONSTRAINT fk_mgr_id FOREIGN KEY (manager_id) REFERENCES employee(id) ON DELETE SET NULL
);