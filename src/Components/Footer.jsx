import React from 'react';
import { FaFacebookF, FaInstagram, FaXTwitter, FaLinkedinIn } from 'react-icons/fa6';

const Footer = () => {
  return (
    <div className="bg-white text-gray-800 px-4 sm:px-6 md:px-8 py-10 sm:py-12 border-t">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">

        
        <div>
          <div className="text-2xl font-semibold mb-4">
            Eklovya Property
          </div>
          <h2 className="text-md mb-4">
            EP dedicated to revolutionizing the real estate experience. Through innovation and excellence.
          </h2>
          <div className="flex space-x-4 text-2xl">
            <FaFacebookF />
            <FaInstagram />
            <FaXTwitter />
            <FaLinkedinIn />
          </div>
        </div>

      <div></div>
        
        <div>
          <h3 className="font-semibold text-lg mb-3">Pages</h3>
          <div className="space-y-2 text-md">
            <h2>Home</h2>
            <h2>About Us</h2>
            <h2>Properties</h2>
          </div>
        </div>

     <div></div>
       
        <div>
          <h3 className="font-semibold text-lg mb-3">Contact</h3>
          <div className="space-y-2 text-md">
            <h2>(+91) 98xxxxxx42</h2>
            <h2>eklovyagauba94@gmail.com</h2>
            <h2>
              Lorem ipsum dolor sit amet, <br />
              consectetur adipisicing elit.
            </h2>
          </div>
        </div>

        
        <div className="hidden md:block" />
      </div>

     
      <div className="border-t mt-10 pt-6 text-sm text-gray-600 flex flex-col sm:flex-row justify-between items-center max-w-7xl mx-auto gap-4 text-center sm:text-left">
        <h2>© All rights reserved.</h2>
      </div>
    </div>
  );
};

export default Footer;
