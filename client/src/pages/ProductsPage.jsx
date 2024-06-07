import { useEffect } from 'react'
import { useProducts } from '../context/ProductsContext'

function ProductsPage () {
  const { getProducts, products } = useProducts()

  useEffect(() => {
    getProducts()
  }, [])

  return (
    <div>
      {products.map(product => (
        <div key={product.code}>
          <h1>{product.code}</h1>
          <p>{product.name}</p>
        </div>
      ))}
    </div>
  )
}

export default ProductsPage
