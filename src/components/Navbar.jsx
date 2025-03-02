import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X, ShoppingCart } from "lucide-react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 w-full z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-gray-900">
          Fashion Mall
        </Link>
        <ul
          className={`md:flex md:space-x-6 text-gray-700 absolute md:relative top-full left-0 md:top-auto md:left-auto bg-white md:bg-transparent w-full md:w-auto shadow-lg md:shadow-none p-4 md:p-0 space-y-4 md:space-y-0 transition-all duration-300 ${menuOpen ? 'block' : 'hidden'} md:flex`}
        >
          <li>
            <Link to="/" className="hover:text-gray-900">
              Home
            </Link>
          </li>
          <li>
            <Link to="/shop" className="hover:text-gray-900">
              Shop
            </Link>
          </li>
          <li>
            <Link to="/collections" className="hover:text-gray-900">
              Collections
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-gray-900">
              Contact
            </Link>
          </li>
        </ul>
        <div className="flex items-center space-x-4">
          <input
            type="text"
            placeholder="Search..."
            className="hidden md:block px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-300"
          />
          <ShoppingCart className="cursor-pointer" />
          <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
