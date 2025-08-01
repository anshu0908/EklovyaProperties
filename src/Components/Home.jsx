import React from 'react';
import { FaFilter, FaHome, FaMapMarkerAlt, FaSearch } from 'react-icons/fa';

const Home = () => {
  return (
    <div
      className="relative h-[48vw] bg-cover bg-center bg-no-repeat bg-[url('https://cdn.prod.website-files.com/67f4e51e5c8ae21dfb2629b0/67f4e9456a9501f92ef078eb_-%20(3).png')] w-full flex items-center justify-center px-6"
    >
      
      <div className="absolute inset-0 bg-black/40"></div>

      
      <div className="relative z-10 text-white max-w-4xl text-left">
        <h1 className="text-6xl font-semibold leading-tight">
          Find the <span className="text-white">right and best</span> <br />
          home for your family
        </h1>
      </div>

      
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2  z-20 w-fit ">
        <div className="bg-white rounded-full shadow-md px-8 py-4 flex flex-nowrap items-center gap-6 max-w-6xl w-full mx-auto">
          
          
          <div className="flex items-center bg-gray-100 px-4 py-2 rounded-full w-[35vw]">
            <FaSearch className="text-gray-400 mr-3" />
            <input
              type="text"
              placeholder="Search for properties"
              className="bg-transparent outline-none w-[35vw] text-gray-700"
            />
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-semibold px-3 py-2 rounded-full whitespace-nowrap">
            Search
          </button>
          </div>

          <button className="flex items-center gap-2 border px-6 py-3 rounded-full text-gray-700 hover:bg-gray-100 transition">
            <FaHome className="text-gray-500" />
            Properties
            <span className="text-xs">▼</span>
          </button>

          
          <button className="flex items-center gap-2 border px-6 py-3 rounded-full text-gray-700 hover:bg-gray-100 transition">
            <FaMapMarkerAlt className="text-gray-500" />
            Location
            <span className="text-xs">▼</span>
          </button>

          
          <button className="flex items-center gap-2 border px-6 py-3 rounded-full text-gray-700 hover:bg-gray-100 transition">
            <FaFilter className="text-gray-500" />
            Types
            <span className="text-xs">▼</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
