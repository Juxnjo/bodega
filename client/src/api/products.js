import axios from './axios'

export const getProductsRequest = () => axios.get('/products')

export const getProductRequest = (code) => axios.get(`/products/${code}`)

export const createProductsRequest = (product) => axios.post('/products', product)

export const updateProductsRequest = (code, product) => axios.put(`/products/${code}`, product)

export const deleteProductRequest = (code) => axios.delete(`/products/${code}`)