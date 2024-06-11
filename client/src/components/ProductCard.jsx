import { useProducts } from "../context/ProductsContext";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrashCan } from "@fortawesome/free-solid-svg-icons";

function ProductCard({ product }) {
  const { deleteProduct } = useProducts();

  return (
    <div className="bg-zinc-300 max-w-md w-full p-10 rounded-md">
      <div className="flex justify-between">
        <h1 className="text-2xl font-bold">Code: {product.code}</h1>
        <div className="flex gap-x-2 itemcen">
          <button
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md"
            onClick={() => {
              deleteProduct(product.code);
            }}
          >
            <FontAwesomeIcon icon={faTrashCan} />
          </button>
          <Link
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
            to={`/products/${product.code}`}
          >
            <FontAwesomeIcon icon={faPenToSquare} />
          </Link>
        </div>
      </div>
      <p>Name: {product.name}</p>
      <p>Created at: {new Date(product.created_at).toLocaleDateString()}</p>
    </div>
  );
}

export default ProductCard;
