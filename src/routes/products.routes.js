import { Router } from "express";   
import { pool } from "../db.js";

const router = Router()

//GET
router.get('/products', async (req, res) => {
    const {rows} = await pool.query('SELECT * FROM products')
    res.json(rows)
})

router.get('/products/:id', async (req, res)=> {
    const {id} =  req.params
    const {rows} = await pool.query('SELECT * FROM products WHERE id = $1', [id])

    if(rows.length === 0){
        return res.status(404).json({message: 'Product not found'})
    }

    res.json(rows[0])
})

//POST
router.post('/products', async (req, res) => {
    const data = req.body
    
    const {rows} = await pool.query('INSERT INTO products (code, name) VALUES ($1, $2) RETURNING *', [data.code, data.name])
    console.log(rows)
    
    return res.json(rows[0])
})

//DELETE
router.delete('/products/:id', async (req, res) => {
    const {id} =  req.params
    const { rowCount} = await pool.query('DELETE FROM products WHERE id = $1 RETURNING *', [id])
    console.log(rows)

    if (rowCount === 0){
        return res.status(404).json({message: "Product not found"})
    }
    
    return res.sendStatus(204)
})

//PUT
router.put('/products/:id', async (req, res) => {
    const {id} =  req.params
    const data = req.body

    const {rows} = await pool.query('UPDATE products SET code = $1, name = $2, updated_at = $3 WHERE id = $4 RETURNING *', [data.code, data.name, data.updated_at, id] )

    return res.json(rows[0])
})

export default router 