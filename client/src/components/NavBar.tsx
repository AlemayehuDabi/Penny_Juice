import { Link } from "react-router-dom";
import logo from "../image/download-1.png";
import { ChevronDown, ShoppingCart, UserRound } from "lucide-react";
import { useEffect, useState } from "react";

export default function NavBar() {
  const [isSticky, setIsSticky] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;

      // Check if scrolling up
      if (currentScrollPos < prevScrollPos) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }

      if (currentScrollPos === 0) {
        setIsSticky(false);
      }

      // Update previous scroll position
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  return (
    <nav
      className={` px-6 py-1  ${
        isSticky
          ? "fixed top-0 left-0 w-full  backdrop-blur-sm bg-white/30 shadow-md z-50 transition-all duration-300"
          : "bg-transparent"
      }`}
    >
      <div className="flex justify-between items-center max-w-7xl mx-auto font-another-one">
        {/* Logo */}
        <div className="flex">
          <img
            src={logo}
            alt="Penny Juice"
            className="w-16 h-16 object-contain"
          />
        </div>

        {/* Nav Links */}
        <div className="hidden md:flex items-center gap-6 text-gray-700 text-sm font-medium">
          <Link to="#home" className="transition">
            Home
          </Link>
          <Link to="#about" className="transition flex items-center gap-1">
            Catagories
            <ChevronDown size={15} className="relative top-[2px]" />
          </Link>
          <Link to="#products" className="transition">
            Products
          </Link>
          <Link to="#testimonials" className="transition">
            Testimonials
          </Link>
          <Link to="#contact" className="transition">
            Contact
          </Link>
        </div>

        {/* CTA Button */}
        <div className="hidden md:flex md:justify-center md:items-center md:gap-6">
          <div className="flex justify-center items-center gap-1 ">
            <UserRound size={20} />
            <ChevronDown
              size={15}
              className="relative top-[2px] cursor-pointer"
            />
          </div>
          <ShoppingCart size={20} className="cursor-pointer" />
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
