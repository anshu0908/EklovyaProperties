import { FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { IoMenu } from 'react-icons/io5';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="absolute top-0 left-0 w-full z-50 ">
      <div className="flex justify-between items-center px-6 md:px-10 py-4 md:py-6 flex-wrap">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2 text-white text-lg md:text-xl font-semibold mb-2 md:mb-0"
        >
          Eklovya Properties
        </Link>

        {/* Desktop Menu */}
        <div>
          <ul className="md:flex hidden gap-6 text-white text-xl">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/Properties">Properties</Link></li>
          </ul>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-4 md:gap-6 text-sm md:text-base">
          <FaUser className="text-white text-lg cursor-pointer hover:text-gray-300" />

          {/* Contact Button (Desktop) */}
          <Link
            to="/contact"
            className="hidden md:inline-block bg-white text-black border border-white px-4 py-1.5 md:px-5 md:py-2 rounded-full font-semibold hover:bg-black hover:text-white transition whitespace-nowrap"
          >
            Contact Us
          </Link>

          {/* Mobile Menu Toggle */}
          <IoMenu
            className="text-white text-2xl md:hidden cursor-pointer"
            onClick={toggleMobileMenu}
          />
        </div>
      </div>

      {/* Mobile Dropdown with Animation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden bg-black px-6 py-4 flex flex-col gap-4 text-white text-lg rounded-b-2xl shadow-lg"
          >
            <Link to="/" onClick={closeMenu}>Home</Link>
            <Link to="/about" onClick={closeMenu}>About</Link>
            <Link to="/services" onClick={closeMenu}>Services</Link>
            <Link to="/Properties" onClick={closeMenu}>Properties</Link>

            <Link
              to="/contact"
              onClick={closeMenu}
              className="bg-black text-white border border-white px-4 py-2 rounded-full text-center font-semibold hover:bg-white hover:text-black transition"
            >
              Contact Us
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
