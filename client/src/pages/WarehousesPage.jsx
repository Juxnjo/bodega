import { useEffect, useState } from "react";
import { useWarehouses } from "../context/WarehousesContext";

function WarehousesPage() {
  const {getWarehouses, warehouses} = useWarehouses()

  useEffect(() => {
    getWarehouses();
  }, []);

  return (
    <div>WarehousesPage</div>
  )
}

export default WarehousesPage