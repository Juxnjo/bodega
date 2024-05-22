import { pool } from "../db.js";

export const readWarehouses = async (req, res) => {
  const { rows } = await pool.query("SELECT * FROM warehouses");
  res.json(rows);
};

export const readWarehouse = async (req, res) => {
  const { code } = req.params;
  const { rows } = await pool.query(
    "SELECT * FROM warehouses WHERE LOWER(code) = LOWER($1)",
    [code]
  );
  res.json(rows)
};