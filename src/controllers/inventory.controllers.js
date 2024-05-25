import { pool } from '../db.js'

export const readInventory = async (req, res) => {
  try {
    const { rows } = await pool.query(`
    SELECT 
        inventory.product_code,
        products.name AS product_name, 
        warehouses.name AS warehouse_name,       
        inventory.warehouse_code, 
        SUM(inventory.qty) AS total_qty
    FROM 
        inventory
        JOIN products ON inventory.product_code = products.code
        JOIN warehouses ON inventory.warehouse_code = warehouses.code
    GROUP BY 
        inventory.product_code, 
        inventory.warehouse_code,
        products.name,
        warehouses.name    
  `)
    res.json(rows)
  } catch (error) {
    console.error('Error querying the database:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
}
