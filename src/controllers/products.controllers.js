import { pool } from "../db.js";

export const readProducts = async (req, res) => {
  const { rows } = await pool.query("SELECT * FROM products");
  res.json(rows);
};

export const readProduct = async (req, res) => {
  const { id } = req.params;
  const { rows } = await pool.query("SELECT * FROM products WHERE id = $1", [
    id,
  ]);

  if (rows.length === 0) {
    return res.status(404).json({ message: "Product not found" });
  }

  res.json(rows[0]);
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
  const { id } = req.params;
  const { rowCount } = await pool.query(
    "DELETE FROM products WHERE id = $1 RETURNING *",
    [id]
  );

  if (rowCount === 0) {
    return res.status(404).json({ message: "Product not found" });
  }

  return res.sendStatus(204);
};

export const updateProduct = async (req, res) => {
  const { id } = req.params;
  const data = req.body;

  const { rows } = await pool.query(
    "UPDATE products SET code = $1, name = $2 WHERE id = $3 RETURNING *",
    [data.code, data.name, id]
  );

  return res.json(rows[0]);
};
