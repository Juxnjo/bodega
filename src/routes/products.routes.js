import { Router } from "express";   

const router = Router()

router.get('/products', (req, res) => {
    res.send("obteniendo productos")
})

router.get('/products/:productId', (req, res)=> {
    const {productId} =  req.params
    res.send("obteniendo producto" + productId)
})

router.post('/products', (req, res) => {
    res.send('creando productos')
})

router.delete('/products/:productId', (req, res) => {
    const {productId} =  req.params
    res.send('eliminando productos' + productId)
})

router.put('/products/:productId', (req, res) => {
    const {productId} =  req.params
    res.send('actualizando productos' + productId)
})

export default router 