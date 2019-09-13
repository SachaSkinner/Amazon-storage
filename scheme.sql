DROP DATABASE IF EXISTS bamazona;
CREATE DATABASE IF NOT EXISTS bamazona;

USE bamazona;

DROP TABLE IF EXISTS products;

CREATE TABLE IF NOT EXISTS products(
item_id int AUTO_INCREMENT,
primary key(item_id),
product_name varchar(150) NULL,
department_name VARCHAR(150) NULL,
price DECIMAL(15,3) NULL,
stock_quantity DECIMAL(15,0) NULL
);

INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES
 ('sosiski', 'almost meat', 34.50, 40), 
 ('pelmeshki', 'ready-to-cook', 20.39, 25),
 ('cheesecake', 'pastry', 4.50, 30),
 ('watermelon', 'fruits', 3.30, 10),
 ('ananas', 'fruits', 4.00, 14),
 ('croissant', 'pastry', 2.50, 36),
 ('red potatoes', 'vegetables', 8.60, 25),
 ('bounty', 'sweets', 1.50, 60),
 ('samsung slow cooker', 'equipment', 50.50, 40),
 ('orange t-shirt', 'clothes', 12.50, 12);

 
--  I was updating some rows while working on my app
 
SELECT * FROM products;
UPDATE products
SET stock_quantity=120
WHERE item_id=6