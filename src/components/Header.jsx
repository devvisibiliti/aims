import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false); // for mobile submenu toggle

  return (
    <header className="bg-white shadow-md fixed top-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo image */}
        <div className="flex items-center">
          <img
            src="/assets/images/logoaims.jpg"
            alt="AIIMS Technology Logo"
            className="h-20 w-auto mr-2"
          />
          
        </div>

        {/* Desktop nav */}
        <nav className="hidden md:block px-40 py-5" >
          <ul className="flex space-x-6 items-center font-semibold text-gray-900 fontweight-bold fontsize-16">
            <li>
              <Link to="/" className="hover:text-blue-600 fontsize-16">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-blue-600">
                About
              </Link>
            </li>

            {/* Services dropdown on desktop */}
            <li className="relative group">
              <span className="cursor-pointer hover:text-blue-600 inline-flex items-center">
                Services
                <svg
                  className="ml-1 w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </span>
              {/* Dropdown menu */}
              <ul className="absolute left-0 mt-2 w-40 bg-white border border-gray-200 rounded-md shadow-lg opacity-0 group-hover:opacity-100 group-hover:visible transition-opacity">
                <li>
                  <Link
                    to="/cctv"
                    className="block px-4 py-2 hover:bg-blue-100"
                  >
                    CCTV
                  </Link>
                </li>
                <li>
                  <Link
                    to="/networking"
                    className="block px-4 py-2 hover:bg-blue-100"
                  >
                    Networking
                  </Link>
                </li>
                <li>
                  <Link
                    to="/security"
                    className="block px-4 py-2 hover:bg-blue-100"
                  >
                    Security
                  </Link>
                </li>
                <li>
                  <Link
                    to="/electrical"
                    className="block px-4 py-2 hover:bg-blue-100"
                  >
                    Electrical
                  </Link>
                </li>
                 <li>
                  <Link
                    to="/hardware"
                    className="block px-4 py-2 hover:bg-blue-100"
                  >
                    Hardware
                  </Link>
                </li>
                <li>
                  <Link
                    to="/software"
                    className="block px-4 py-2 hover:bg-blue-100"
                  >
                    Software
                  </Link>
                </li>
              </ul>
            </li>

            <li>
              <Link to="/contact" className="hover:text-blue-600">
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        {/* Mobile hamburger icon */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden focus:outline-none"
          aria-label="Toggle Menu"
        >
          <svg
            className="w-7 h-7 text-blue-600"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      <nav
        className={`md:hidden bg-white shadow-md transition-all duration-300 ease-in-out ${
          menuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
        }`}
        aria-label="Mobile Navigation"
      >
        <ul className="flex flex-col space-y-2 p-4">
          <li>
            <Link
              to="/"
              onClick={() => setMenuOpen(false)}
              className="block py-2 px-4 hover:bg-blue-100 rounded"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              onClick={() => setMenuOpen(false)}
              className="block py-2 px-4 hover:bg-blue-100 rounded"
            >
              About
            </Link>
          </li>

          {/* Services with toggle submenu on mobile */}
          <li>
            <button
              onClick={() => setServicesOpen(!servicesOpen)}
              className="w-full flex justify-between items-center py-2 px-4 hover:bg-blue-100 rounded focus:outline-none"
              aria-expanded={servicesOpen}
              aria-controls="mobile-services-submenu"
            >
              <span>Services</span>
              <svg
                className={`w-4 h-4 transform transition-transform ${
                  servicesOpen ? 'rotate-180' : ''
                }`}
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            <ul
              id="mobile-services-submenu"
              className={`pl-4 mt-1 space-y-1 overflow-hidden transition-max-height duration-300 ${
                servicesOpen ? 'max-h-40' : 'max-h-0'
              }`}
            >
              <li>
                <Link
                  to="/cctv"
                  onClick={() => setMenuOpen(false)}
                  className="block py-2 px-4 hover:bg-blue-200 rounded"
                >
                  CCTV
                </Link>
              </li>
              <li>
                <Link
                  to="/networking"
                  onClick={() => setMenuOpen(false)}
                  className="block py-2 px-4 hover:bg-blue-200 rounded"
                >
                  Networking
                </Link>
              </li>
              <li>
                <Link
                  to="/system-hardware"
                  onClick={() => setMenuOpen(false)}
                  className="block py-2 px-4 hover:bg-blue-200 rounded"
                >
                  System Hardware
                </Link>
              </li>
            </ul>
          </li>

          <li>
            <Link
              to="/testimonials"
              onClick={() => setMenuOpen(false)}
              className="block py-2 px-4 hover:bg-blue-100 rounded"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
