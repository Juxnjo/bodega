import { useEffect } from 'react'
import { useProducts } from '../context/ProductsContext'
import ProductCard from "../components/ProductCard";

function ProductsPage () {
  const { getProducts, products } = useProducts()

  useEffect(() => {
    getProducts()
  }, [])

  return (
    <div className='grid grid-cols-3 gap-2'>
      {products.map(product => (
        <ProductCard product={product} key={product.code}/>
      ))}
    </div>
  )
}

export default ProductsPage
