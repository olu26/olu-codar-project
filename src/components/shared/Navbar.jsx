import { useState } from "react";
import logo from "../../assets/img/logo/logo.png";
import { Link } from "react-router-dom";

const navbarcom = [
  { id: 1, title: "HOME", href: "/" },
  { id: 2, title: "ABOUT", href: "/about" },
  { id: 3, title: "SERVICE", href: "/services" },
  { id: 4, title: "GALLERY", href: "/gallery" },
  { id: 5, title: "BLOG", href: "/blog", subMenu: [
      { title: "Blogs", href: "/blog" },
      { title: "Blog Details", href: "/blogsdetails" },

    ] 
  },
  { id: 6, title: "CONTACT", href: "/contact" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="bg-[#1f0101] shadow-sm fixed top-0 left-0 w-full z-50">
      <div className="w-full flex items-center justify-between h-16 pl-4">
        {/* Brand Logo */}
        <Link to={"/"} className="flex-shrink-0">
          <img src={logo} alt="Narosundar" className="h-10" />
        </Link>

        {/* Hamburger Menu (Mobile) */}
        <button
          className="md:hidden p-2 text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Desktop Navigation */}
        <div className="flex gap-10 items-center h-full">
          <div className="hidden md:flex flex-grow justify-center space-x-8">
            {navbarcom.map((item) => (
              <div key={item.id} className="relative group">
                {/* Main Nav Item */}
                <a
                  href={item.href}
                  className="text-amber-50 text-lg font-semibold hover:text-red-600 transition-colors px-4 py-2"
                  onMouseEnter={() => item.subMenu && setDropdownOpen(true)}
                  onMouseLeave={() => item.subMenu && setDropdownOpen(false)}
                >
                  {item.title}
                </a>

                {/* Dropdown Menu for BLOG */}
                {item.subMenu && dropdownOpen && (
                  <div
                    className="absolute left-0 mt-2 bg-white shadow-lg rounded-lg w-40 z-50"
                    onMouseEnter={() => setDropdownOpen(true)}
                    onMouseLeave={() => setDropdownOpen(false)}
                  >
                    {item.subMenu.map((subItem, index) => (
                      <a
                        key={index}
                        href={subItem.href}
                        className="block px-4 py-2 text-gray-800 hover:bg-gray-200 transition-colors"
                      >
                        {subItem.title}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Desktop CTA Button */}
          <button className="hidden md:block bg-red-600 hover:bg-red-700 text-white px-6 py-2 transition-colors h-full">
            FREE QUOTE
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-16 left-0 right-0 bg-[#1f0101] z-50 md:hidden">
          <div className="flex flex-col items-center space-y-4 py-4">
            {navbarcom.map((item) => (
              <div key={item.id} className="w-full text-center">
                <a
                  href={item.href}
                  className="text-amber-50 hover:text-red-600 transition-colors block py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.title}
                </a>

                {/* Mobile Dropdown for Blog */}
                {item.subMenu && (
                  <div className="space-y-2 mt-2">
                    {item.subMenu.map((subItem, index) => (
                      <a
                        key={index}
                        href={subItem.href}
                        className="block text-gray-300 hover:text-white transition-colors"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {subItem.title}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 w-full max-w-xs transition-colors">
              FREE QUOTE
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
