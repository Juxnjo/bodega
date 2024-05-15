import { Router } from "express";   
import { pool } from "../db.js";

const router = Router()

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

    res.json(rows)
})

router.post('/products', async (req, res) => {
    const data = req.body
    console.log(data)
    const result = await pool.query('INSERT INTO products (code, name) VALUES ($1, $2)', [data.code, data.name])
    console.log(result)
    res.send('creando productos')
})

router.delete('/products/:id', async (req, res) => {
    const {id} =  req.params
    const {rows, rowCount} = await pool.query('DELETE FROM products WHERE id = $1 RETURNING *', [id])
    console.log(rows)

    if (rowCount === 0){
        return res.status(404).json({message: "Product not found"})
    }
    
    return res.json({message: 'Product deleted'})
})

router.put('/products/:id', (req, res) => {
    const {id} =  req.params
    res.send('actualizando productos' + productId)
})

export default router 