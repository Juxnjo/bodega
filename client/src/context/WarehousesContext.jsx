import { createContext, useContext, useState } from "react";
import { getWarehousesRequest } from "../api/warehouses";


const WarehouseContext = createContext();

export const useWarehouses = () => {
  const context = useContext(WarehouseContext);

  if (!context) {
    throw new Error("useWarehouses must be used within a WarehouseProvider");
  }
  return context;
};

export function WarehouseProvider({ children }) {
  const [warehouses, setWarehouses] = useState([]);

  const getWarehouses = async () => {
    try {
      const res = await getWarehousesRequest();
      setWarehouses(res.data);
    } catch (error) {
      console.error(error);
    }
  };


  return (
    <WarehouseContext.Provider
      value={{
        warehouses,
        
      }}
    >
      {children}
    </WarehouseContext.Provider>
  );
}
