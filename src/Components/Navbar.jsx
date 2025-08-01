import { FaUser } from 'react-icons/fa';

const Navbar = () => {
  return (
    <div className="absolute top-0 left-0 w-full z-50 bg-transparent">
      <div className="flex justify-between items-center px-6 md:px-10 py-4 md:py-6 flex-wrap">
        
        
        <div className="flex items-center gap-2 text-white text-lg md:text-xl font-semibold mb-2 md:mb-0">
          <div className="w-6 h-6 bg-white rounded-sm"></div>
          Eklovya Property
        </div>

       
        <div className="hidden md:flex items-center gap-10 text-white text-base md:text-lg font-medium">
          <h2 href="#" className="hover:text-gray-300 transition">Home</h2>
          <h2 href="#" className="hover:text-gray-300 transition">About</h2>
          <h2 href="#" className="hover:text-gray-300 transition">Properties</h2>
        </div>

        
        <div className="flex items-center gap-4 md:gap-6 text-sm md:text-base">
          <FaUser className="text-white text-lg cursor-pointer hover:text-gray-300" />

          <button className="text-white border md:block hidden border-white px-4 py-1.5 md:px-5 md:py-2 rounded-full font-semibold hover:bg-white hover:text-black transition whitespace-nowrap">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
