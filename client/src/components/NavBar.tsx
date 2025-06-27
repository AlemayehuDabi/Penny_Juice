import { Link } from "react-router-dom";
import { ChevronDown, ShoppingCart, UserRound, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import logo from "../image/download-1.png";

interface NavLink {
  label: string;
  href: string;
  hasDropdown?: boolean;
}

const navLinks: NavLink[] = [
  { label: "Home", href: "/home" },
  { label: "Categories", href: "/categories", hasDropdown: true },
  { label: "Products", href: "/products" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Contact", href: "/contact" },
];

export default function NavBar() {
  const [isSticky, setIsSticky] = useState<boolean>(false);
  const [prevScrollPos, setPrevScrollPos] = useState<number>(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;

      // Sticky when scrolling down past 100px, hide when scrolling up
      setIsSticky(currentScrollPos > 100 && currentScrollPos < prevScrollPos);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  // Mock authentication state (replace with actual auth logic)
  const isAuthenticated = false;

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isSticky
          ? "bg-amber-400/20 backdrop-blur-sm shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 font-sans">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/">
              <img
                src={logo}
                alt="Penny Juice"
                className="w-12 h-12 sm:w-16 sm:h-16 object-contain"
              />
            </Link>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-6 text-gray-700 text-sm font-medium">
            {navLinks.map((link: NavLink, index: number) => (
              <Link
                key={index}
                to={link.href}
                className="flex items-center gap-1 hover:text-amber-600 transition duration-300"
              >
                {link.label}
                {link.hasDropdown && (
                  <ChevronDown size={15} className="relative top-[2px]" />
                )}
              </Link>
            ))}
          </div>

          {/* Desktop CTA / Authenticated Icons */}
          <div className="hidden md:flex items-center gap-4">
            {isAuthenticated ? (
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1 cursor-pointer hover:text-amber-600 transition duration-300">
                  <UserRound size={20} />
                  <ChevronDown size={15} className="relative top-[2px]" />
                </div>
                <ShoppingCart
                  size={20}
                  className="cursor-pointer hover:text-amber-600 transition duration-300"
                />
              </div>
            ) : (
              <div className="flex gap-4">
                <button className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-amber-100 transition duration-300">
                  Sign in
                </button>
                <button className="px-4 py-2 bg-amber-500 text-white rounded-md hover:bg-amber-600 transition duration-300">
                  Sign up
                </button>
              </div>
            )}
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              className="text-gray-700 focus:outline-none"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white shadow-md mt-4 rounded-lg p-4 animate-slide-down">
            <div className="flex flex-col gap-4 text-gray-700 text-sm font-medium">
              {navLinks.map((link: NavLink, index: number) => (
                <Link
                  key={index}
                  to={link.href}
                  onClick={toggleMobileMenu}
                  className="flex items-center gap-1 hover:text-amber-600 transition duration-300"
                >
                  {link.label}
                  {link.hasDropdown && (
                    <ChevronDown size={15} className="relative top-[2px]" />
                  )}
                </Link>
              ))}
              {!isAuthenticated && (
                <div className="flex flex-col gap-4 mt-4">
                  <button className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-amber-100 transition duration-300">
                    Sign in
                  </button>
                  <button className="px-4 py-2 bg-amber-500 text-white rounded-md hover:bg-amber-600 transition duration-300">
                    Sign up
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
