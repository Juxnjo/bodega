CREATE TABLE products (
    id SERIAL PRIMARY KEY,
	code INTEGER NOT NULL CHECK (code >= 1000 AND code <= 9999),
    name VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
); 

SELECT * FROM products 

ALTER TABLE products
ADD CONSTRAINT unique_code UNIQUE (code);

