import { Router } from "express";   
import { pool } from "../db.js";

const router = Router()

router.get('/products', async (req, res) => {
    const {rows} = await pool.query('SELECT * FROM products')
    res.json(rows)
})

router.get('/products/:id', async (req, res)=> {
    const {id} =  req.params
    const {rows} = await pool.query(`SELECT * FROM products WHERE id = ${id}`)

    if(rows.length === 0){
        return res.status(404).json({message: 'Product not found'})
    }

    res.json(rows)

    
})

router.post('/products', (req, res) => {
    res.send('creando productos')
})

router.delete('/products/:id', (req, res) => {
    const {id} =  req.params
    res.send('eliminando productos' + productId)
})

router.put('/products/:id', (req, res) => {
    const {id} =  req.params
    res.send('actualizando productos' + productId)
})

export default router 