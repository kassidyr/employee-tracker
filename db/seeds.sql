USE employee;

INSERT INTO department(dept_name) VALUES ('executive');

INSERT INTO role(title, salary, department_id) VALUES ('CEO', 100000, 1);

INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('John', 'Smith', 1, NULL);
