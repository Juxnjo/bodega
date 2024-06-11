import { useEffect, useState } from "react";
import { useProducts } from "../context/ProductsContext";
import ProductCard from "../components/ProductCard";
import SearchBar from "../components/SearchBar";

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
      <SearchBar onSearch={handleSearch} />
      <div className="grid grid-cols-3 gap-2">
        {filteredProducts.map((product) => (
          <ProductCard product={product} key={product.code} />
        ))}
      </div>
    </div>
  );
}

export default ProductsPage;
