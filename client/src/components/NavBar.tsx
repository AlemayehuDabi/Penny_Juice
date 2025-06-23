import { Link } from "react-router-dom";
import logo from "../image/download-1.png";

export default function NavBar() {
  return (
    <nav className="fixed top-0 inset-x-0 z-50 py-3">
      <div className="flex justify-between items-center max-w-7xl mx-auto font-another-one">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <span className="text-xl">Penny </span>
          <img
            src={logo}
            alt="Penny Juice"
            className="w-12 h-12 object-contain"
          />
          <span className="text-xl"> Juice</span>
        </div>

        {/* Nav Links */}
        <div className="hidden md:flex items-center gap-6 text-gray-700 font-medium">
          <Link to="#home" className="hover:text-green-600 transition">
            Home
          </Link>
          <Link to="#about" className="hover:text-green-600 transition">
            About Us
          </Link>
          <Link to="#products" className="hover:text-green-600 transition">
            Products
          </Link>
          <Link to="#testimonials" className="hover:text-green-600 transition">
            Testimonials
          </Link>
          <Link to="#contact" className="hover:text-green-600 transition">
            Contact
          </Link>
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <button className="px-4 py-2 rounded-md border transition hover:text-gray-500 ">
            Order Now
          </button>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button className="text-gray-700 focus:outline-none">
            {/* You can later add a hamburger icon here */}☰
          </button>
        </div>
      </div>
    </nav>
  );
}
