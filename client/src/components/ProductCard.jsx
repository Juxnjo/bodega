import { useProducts } from "../context/ProductsContext";
import { Link } from "react-router-dom";

function ProductCard({ product }) {
    const {deleteProduct} = useProducts()

  return (
    <div className="bg-zinc-300 max-w-md w-full p-10 rounded-md">
      <div className="flex justify-between">
        <h1 className="text-2xl font-bold">{product.code}</h1>
        <div className="flex gap-x-2 itemcen">
          <button onClick={() =>{
            deleteProduct(product.code);
          }}>Delete</button>
          <button><Link to={`/products/${product.code}`}>Edit</Link></button>
        </div>
      </div>
      <p>{product.name}</p>
      <p>{new Date(product.created_at).toLocaleDateString()}</p>
    </div>
  );
}

export default ProductCard;
