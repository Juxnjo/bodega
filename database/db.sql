CREATE DATABASE nodepg; 

CREATE TABLE products (
    id SERIAL PRIMARY KEY,
	code INTEGER NOT NULL CHECK (code >= 1000 AND code <= 9999),
    name VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
); 

ALTER TABLE products
ADD CONSTRAINT unique_code UNIQUE (code);

CREATE TABLE warehouses (
    id SERIAL PRIMARY KEY,
	code VARCHAR(10) NOT NULL UNIQUE,
    name VARCHAR(25) NOT NULL,
    address TEXT
);

CREATE TABLE inventory (
    id SERIAL PRIMARY KEY,
    product_code INT REFERENCES products(code),
    warehouse_code VARCHAR(10) REFERENCES warehouses(code),
    qty INT NOT NULL CHECK (qty >= 0),
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)

ALTER TABLE inventory
ADD CONSTRAINT FK_product
FOREIGN KEY (product_code)
REFERENCES products(code)

ALTER TABLE inventory
ADD CONSTRAINT FK_warehouse
FOREIGN KEY (warehouse_code)
REFERENCES warehouses(code)

ALTER TABLE warehouses
ADD CONSTRAINT check_no_spaces_in_code CHECK (code !~ '\s')





