import React from 'react';
import { FaFacebookF, FaInstagram, FaXTwitter, FaLinkedinIn } from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer className="bg-white text-gray-800 px-4 sm:px-6 md:px-8 py-10 sm:py-12 border-t">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        
        <div>
          <div className="text-2xl font-semibold items-center space-x-2 mb-4">
            Eklovya Properties
          </div>
          <p className="text-sm mb-4">
            © EP dedicated to revolutionizing the real estate experience. Through innovation and excellence.
          </p>
          <div className="flex space-x-4 text-2xl">
            <FaFacebookF />
            <FaInstagram />
            <FaXTwitter />
            <FaLinkedinIn />
          </div>
        </div>

        <div>
          <h3 className="font-semibold mb-3">Pages</h3>
          <ul className="space-y-2 text-sm">
            <li>Home</li>
            <li>About Us</li>
            <li>Properties</li>
          </ul>
        </div>

        <div className="hidden md:block">
          
        </div>

        <div>
          <h3 className="font-semibold mb-3">Contact</h3>
          <ul className="space-y-2 text-sm">
            <li>(+91) 98xxxxxx42</li>
            <li>eklovyagauba94@gmail.com</li>
            <li>
              Lorem ipsum dolor sit amet, <br />
              consectetur adipisicing elit.
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t mt-10 pt-6 text-sm text-gray-600 flex flex-col sm:flex-row justify-between items-center max-w-7xl mx-auto gap-4 text-center sm:text-left">
        <p>© All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
