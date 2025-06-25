import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="bg-white shadow-md fixed top-0 w-full z-50">
            <div className="container mx-auto flex justify-between items-center p-4">
                <div className="text-2xl font-bold text-blue-600">AIIMS Technology</div>

                {/* Desktop nav */}
                <nav className="hidden md:block">
                    <ul className="flex space-x-6">
                        <li><Link to="/" className="hover:text-blue-600">Home</Link></li>
                        <li><Link to="/about" className="hover:text-blue-600">About</Link></li>
                        <li><Link to="/cctv" className="hover:text-blue-600">Services</Link></li>
                        <li><Link to="/testimonials" className="hover:text-blue-600">Contact</Link></li>
                        {/* <li><Link to="/faq" className="hover:text-blue-600">FAQ</Link></li> */}
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
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                        )}
                    </svg>
                </button>
            </div>

            {/* Mobile menu */}
            <nav
                className={`md:hidden bg-white shadow-md transition-all duration-300 ease-in-out ${
                    menuOpen ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
                }`}
                aria-label="Mobile Navigation"
            >
                <ul className="flex flex-col space-y-2 p-4">
                    <li>
                        <Link
                            to="/about"
                            onClick={() => setMenuOpen(false)}
                            className="block py-2 px-4 hover:bg-blue-100 rounded"
                        >
                            About
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/products"
                            onClick={() => setMenuOpen(false)}
                            className="block py-2 px-4 hover:bg-blue-100 rounded"
                        >
                            Products
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/testimonials"
                            onClick={() => setMenuOpen(false)}
                            className="block py-2 px-4 hover:bg-blue-100 rounded"
                        >
                            Testimonials
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/faq"
                            onClick={() => setMenuOpen(false)}
                            className="block py-2 px-4 hover:bg-blue-100 rounded"
                        >
                            FAQ
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;