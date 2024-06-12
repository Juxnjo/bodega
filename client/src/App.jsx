import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductsPage from "./pages/ProductsPage";
import ProductFormPage from "./pages/ProductFormPage";
import WarehousesPage from "./pages/WarehousesPage";
import WarehousesFormPage from "./pages/WarehousesFormPage";
import InventoryPage from "./pages/InventoryPage";
import { ProductProvider } from "./context/ProductsContext";
import { WarehouseProvider } from "./context/WarehousesContext";
import "./App.css";
import NavBar from "./components/NavBar";

function App() {
  return (
    <ProductProvider>
      <WarehouseProvider>
        <BrowserRouter>
          <NavBar />

          <Routes>
            <Route
              path="/"
              element={<h1 className="text-3xl font-bold underline">Home</h1>}
            />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/products/:code" element={<ProductFormPage />} />
            <Route path="/products/new" element={<ProductFormPage />} />
            <Route path="/warehouses" element={<WarehousesPage />} />
            <Route path="/warehouses/:code" element={<WarehousesFormPage />} />
            <Route path="/warehouses/new" element={<WarehousesFormPage />} />
            <Route path="/inventory" element={<InventoryPage />} />
          </Routes>
        </BrowserRouter>
      </WarehouseProvider>
    </ProductProvider>
  );
}

export default App;
