import { pool } from "../db.js";

export const readWarehouses = async(req ,res) => {
    const {rows} = await pool.query('SELECT * FROM warehouses')
    res.json(rows)
   
    
}