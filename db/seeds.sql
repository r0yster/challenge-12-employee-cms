INSERT INTO department (name)
VALUES
    ('Engineering'),
    ('Application Development'),
    ('IS Security'),
    ('Project Management');

INSERT INTO emp_roles (title, salary, department_id)
VALUES
    ('Intern', 1000, 4),
    ('Engineer', 65000, 1),
    ('Engineering Manager', 100000, 1),
    ('Developer', 75000, 2),
    ('Development Manager', 115000, 2),
    ('Security Analyst', 70000, 3),
    ('IS Security Manager', 110000, 3),
    ('Business Analyst', 60000, 4),
    ('Project Manager', 100000, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
    ('Bonny', 'Mee', 3, NULL),
    ('Aracelis', 'Jayne', 5, NULL),
    ('Everette', 'Goris', 7, NULL),
    ('Jacquetta', 'Focht', 9, NULL),
    ('Venice', 'Suire', 6, 3),
    ('Suk', 'Dison', 2, 1),
    ('Sau','Beech', 4, 2), 
    ('Cherly', 'Sojka', 1, 1),
    ('Jessi', 'Fujii', 6, 3),
    ('Edgardo', 'Houghtaling', 1, 2), 
    ('Florinda', 'Mcconville', 4, 2),
    ('Harley', 'Mckeever', 6, 3),
    ('Leatrice', 'Hereford', 8, 4),
    ('Cher', 'Melillo', 2, 1),
    ('Nathan', 'Dejonge', 1, 3),
    ('Britney', 'Kibler', 2, 1),
    ('Terina', 'Swaby', 8, 4),
    ('Allen', 'Greenough', 2, 1),
    ('Sherell', 'Charters', 4, 2),
    ('Thad', 'Rawson', 2, 1);