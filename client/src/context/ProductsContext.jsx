import { createContext, useContext, useState } from "react";
import {
  getProductsRequest,
  createProductsRequest,
  deleteProductRequest,
  getProductRequest,
  updateProductsRequest,
} from "../api/products";

const ProductContext = createContext();

export const useProducts = () => {
  const context = useContext(ProductContext);

  if (!context) {
    throw new Error("useProducts must be used within a ProductProvider");
  }
  return context;
};

export function ProductProvider({ children }) {
  const [products, setProducts] = useState([]);

  const createProduct = async (product) => {
    const res = await createProductsRequest(product);
    console.log(res);
    
  };

  const getProducts = async () => {
    try {
      const res = await getProductsRequest();
      setProducts(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  const deleteProduct = async (code) => {
    try {
      const res = await deleteProductRequest(code);
      if (res.status === 200)
        setProducts(products.filter((product) => product.code !== code));
      alert('Delete OK!')
    } catch (error) {
      alert(`Product in inventory: ${error.message}`);
    }
  };

  const getProduct = async (code) => {
    try {
      const res = await getProductRequest(code);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  };

  const updateProduct = async (code, product) => {
    try {
      const res = await updateProductsRequest(code, product);
      if (res.status === 200)
        setProducts(products.filter((product) => product.code !== code));
      
    } catch (error) {
      alert(`Product in inventory: ${error.message}`);
    }
  };

  return (
    <ProductContext.Provider
      value={{
        products,
        createProduct,
        getProducts,
        deleteProduct,
        getProduct,
        updateProduct,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}
