DROP DATABASE IF EXISTS budget;
CREATE DATABASE IF NOT EXISTS budget;

USE budget;

CREATE TABLE budgets (
    id int not null auto_increment primary key,
    name varchar(255),
    start_date datetime,
    end_date datetime,
    expected_income float,
    user_id int
);

CREATE TABLE budget_lines (
    id int not null auto_increment primary key,
    name varchar(255),
    expected_spending float,
    category varchar(255),
    budget_id int not null
);

GRANT SELECT,INSERT,DROP,CREATE,UPDATE,DELETE ON budget.* TO 'student'@'localhost';
FLUSH PRIVILEGES;