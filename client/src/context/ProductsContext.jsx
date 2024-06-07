import { createContext, useContext, useState } from 'react'
import { getProductsRequest, createProductsRequest } from '../api/products'

const ProductContext = createContext()

export const useProducts = () => {
  const context = useContext(ProductContext)

  if (!context) {
    throw new Error('useProducts must be used within a ProductProvider')
  }
  return context
}

export function ProductProvider ({ children }) {
  const [products, setProducts] = useState([])

  const createProduct = async product => {
    const res = await createProductsRequest(product)
    console.log(res)
  }

  const getProducts = async () => {
    try {
      const res = await getProductsRequest()
      setProducts(res.data)
    } catch (error) {
        console.error(error);
    }
  }

  return (
    <ProductContext.Provider value={{ products, createProduct, getProducts }}>
      {children}
    </ProductContext.Provider>
  )
}