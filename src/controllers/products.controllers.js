import { response } from "express";
import { pool } from "../db.js";

export const readProducts = async (req, res) => {
  const { rows } = await pool.query("SELECT * FROM products");
  res.json(rows);
};

export const readProduct = async (req, res) => {
  try {
    const { code } = req.params;
    const { rows } = await pool.query(
      "SELECT * FROM products WHERE code  = $1",
      [code]
    );
    if (rows.length === 0) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.json(rows[0]);
  } catch (error) {
    console.error("Error querying the database:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const createProducts = async (req, res) => {
  try {
    const data = req.body;

    const { rows } = await pool.query(
      "INSERT INTO products (code, name) VALUES ($1, $2) RETURNING *",
      [data.code, data.name]
    );
    console.log(rows);
    return res.json(rows[0]);
  } catch (error) {
    if (error?.code === "23505") {
      return res.status(409).json({ message: "Code already exists" });
    }
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const deleteProduct = async (req, res) => {
  try {
    const { code } = req.params;
    if (!code) {
      return res.status(400).json({ message: "Product code is required" });
    }
    const { rows, rowCount } = await pool.query(
      "DELETE FROM products WHERE code = $1 RETURNING *",
      [code]
    );

    if (rowCount === 0) {
      return res.status(404).json({ message: "Product not found" });
    }

    return res
      .status(200)
      .json({ message: "Product deleted", product: rows[0] });
  } catch (error) {
    console.log("Error deleting product:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const updateProduct = async (req, res) => {
  const { code } = req.params;
  const data = req.body;

  const { rows } = await pool.query(
    "UPDATE products SET code = $1, name = $2 WHERE code = $3 RETURNING *",
    [data.code, data.name, code]
  );

  return res.json(rows[0]);
};
