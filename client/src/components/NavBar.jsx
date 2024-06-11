import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

function NavBar() {
  const location = useLocation();

  return (
    <nav className="bg-zinc-300 my-3 flex justify-between py-5 px-10 rounded-sm">
      <Link to="/">
        <h1 className="text-2xl font-bold">Inventory App</h1>
      </Link>
      <ul className="flex gap-x-2">
        {location.pathname !== "/products" && (
          <li>
            <Link to="/products">Products List</Link>
          </li>
        )}
        {location.pathname === "/products" && (
          <li>
            <Link to="/products/new" className="bg-green-500 px-4 py-2 rounded-sm textw">Add New Product <FontAwesomeIcon icon={faPlus} /></Link>
          </li>
        )}
        <li>
          <Link to="/warehouses">Warehouses</Link>
        </li>
        <li>
          <Link to="/inventory">Inventory</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
