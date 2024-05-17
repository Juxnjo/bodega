import { pool } from "../db.js";

export const readWarehouses = async (req, res) => {
  const { rows } = await pool.query("SELECT * FROM warehouses");
  res.json(rows);
};

export const readWarehouse = async (req, res) => {
  const { id } = req.params;
  const { rows } = await pool.query(
    "SELECT * FROM warehouses WHERE id = $1",
    [id]
  );
  res.json(rows)
};