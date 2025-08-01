import { FaUser, FaShoppingCart } from 'react-icons/fa';


const Navbar = () => {
  

  return (
    <div className="absolute top-0 left-0 w-full z-50 bg-transparent">
      <div className="flex justify-between items-center px-10 py-6">
       
        <div className="flex items-center gap-2 text-white text-xl font-semibold">
          <div className="w-6 h-6 bg-white rounded-sm"></div>
          Eklovya Property
        </div>

        
        <div className="flex items-center gap-16 text-white text-lg font-medium">
          <a href="#" className="hover:text-gray-300 transition">Home</a>
          <a href="#" className="hover:text-gray-300 transition">About</a>
          <a href="#" className="hover:text-gray-300 transition">Properties</a>

        </div>

       
        <div className="flex items-center gap-6">
          <FaUser className="text-white text-lg cursor-pointer hover:text-gray-300" />

          

          <button className="text-white border border-white px-5 py-2 rounded-full font-semibold hover:bg-white hover:text-black transition">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
