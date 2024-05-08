CREATE DATABASE nodepg; 

CREATE TABLE products (
    id SERIAL PRIMARY KEY,
	code INTEGER NOT NULL CHECK (code >= 1000 AND code <= 9999),
    name VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
); 

INSERT INTO products (code, name) 
	VALUES ('1000', 'Computador Lenovo'), 
	('9999', 'Computador de mesa')

SELECT * FROM products 