import { useProducts } from "../context/ProductsContext";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrashCan } from "@fortawesome/free-solid-svg-icons";

function ProductCard({ product }) {
  const { deleteProduct } = useProducts();

  return (
    <div className="bg-zinc-300 max-w-md w-full p-10 rounded-sm">
      <div className="flex justify-between">
        <h1 className="text-2xl font-bold">Code: {product.code}</h1>
        <div className="flex gap-x-1 itemcen">
          <button
            className=" text-red-500 text-black px-2 py-1 rounded-full"
            onClick={() => {
              deleteProduct(product.code);
            }}
          >
            <FontAwesomeIcon icon={faTrashCan} />
          </button>
          <Link
            className="text-yellow-500 px-2 py-1 rounded-sm"
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
