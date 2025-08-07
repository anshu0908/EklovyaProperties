import { FaUser} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { IoMenu } from 'react-icons/io5';


const Navbar = () => {
  return (
    <div className="absolute top-0 left-0 w-full z-50 bg-transparent">
      <div className="flex justify-between items-center px-6 md:px-10 py-4 md:py-6 flex-wrap">
        
        
        <Link to={'/'} className="flex items-center gap-2 text-white text-lg md:text-xl font-semibold mb-2 md:mb-0">
     
          Eklovya Property
        </Link>

       
       <div className=" ">
      <ul className="md:flex hidden gap-6 text-white text-xl">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/Properties">Properties</Link></li>
       
      </ul>
    </div>

        
        <div className="flex items-center gap-4 md:gap-6 text-sm md:text-base">
          <FaUser className="text-white text-lg cursor-pointer hover:text-gray-300" />
          
          <button className="sm:hidden text-white border md:block hidden border-white px-4 py-1.5 md:px-5 md:py-2 rounded-full font-semibold hover:bg-white hover:text-black transition whitespace-nowrap">
            Contact Us
          </button>
          <IoMenu className="text-white text-2xl md:hidden" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
