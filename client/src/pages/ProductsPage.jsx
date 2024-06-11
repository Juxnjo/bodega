import { useEffect, useState } from "react";
import { useProducts } from "../context/ProductsContext";
import ProductCard from "../components/ProductCard";
import SearchBar from "../components/SearchBar";
import { exportToExcel } from "../utils/exportToExcel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileExcel } from "@fortawesome/free-solid-svg-icons";

function ProductsPage() {
  const { getProducts, products } = useProducts();
  const [filteredProducts, setFilteredProducts] = useState(products);

  useEffect(() => {
    getProducts();
  }, []);

  useEffect(() => {
    setFilteredProducts(products);
  }, [products]);

  const handleSearch = (searchTerm) => {
    const filteredResults = products.filter((product) => {
      const lowerCaseSearchTerm = searchTerm.toLowerCase();
      return (
        product.name.toLowerCase().includes(lowerCaseSearchTerm) ||
        product.code.toString().includes(lowerCaseSearchTerm)
      );
    });
    setFilteredProducts(filteredResults);
  };

  return (
    <div>
      <div className="flex items-center justify-between my-2">
        <SearchBar onSearch={handleSearch} />
        <button
          onClick={() => exportToExcel(filteredProducts, "Products")}
          className="bg-blue-500 text-white px-4 py-2 rounded-sm"
        >
          <FontAwesomeIcon icon={faFileExcel} className="mr-2" />
          Export to Excel
        </button>
      </div>
      <div className="grid grid-cols-3 gap-2">
        {filteredProducts.map((product) => (
          <ProductCard product={product} key={product.code} />
        ))}
      </div>
    </div>
  );
}

export default ProductsPage;
