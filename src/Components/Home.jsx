import React from 'react';
import { FaFilter, FaHome, FaMapMarkerAlt, FaSearch } from 'react-icons/fa';
import Properties from './Properties';
import FAQ from './FAQ';
import AboutUs from './AboutUs';
import Contact from './contact';
import Sectors from './SectorCard';

const Home = () => {
  return (
    <>
    <div
      className="relative h-[48vw] min-h-[500px] bg-cover bg-center bg-no-repeat bg-[url('https://cdn.prod.website-files.com/67f4e51e5c8ae21dfb2629b0/67f4e9456a9501f92ef078eb_-%20(3).png')] w-full flex items-center justify-center px-4 sm:px-6"
    >
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative z-10 text-white max-w-4xl text-left md:px-2">
        <h1 className="text-3xl md:text-6xl font-semibold leading-snug md:leading-tight">
          Find the <span className="text-white">right and best</span> <br />
          home for your family
        </h1>
      </div>

     
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 z-20 w-full px-4">
        <div className="bg-white rounded-2xl shadow-md px-4 py-4 flex flex-col md:flex-row md:flex-nowrap items-stretch md:items-center gap-4 md:gap-6 max-w-6xl w-full mx-auto">
          
         
          <div className="flex flex-1 items-center bg-gray-100 px-4 py-2 rounded-full">
            <FaSearch className="text-gray-400 mr-2" />
            <input
              type="text"
              placeholder="Search for properties"
              className="bg-transparent outline-none w-full text-gray-700"
            />
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-semibold px-3 py-2 rounded-full whitespace-nowrap ml-2">
              Search
            </button>
          </div>

         
          <div className="flex flex-wrap md:flex-nowrap gap-3 justify-between w-full md:w-auto">
            <h2 className="flex items-center gap-2 border px-4 py-2 rounded-full text-gray-700 hover:bg-gray-100 transition w-full md:w-auto justify-center">
              <FaHome className="text-gray-500" />
              Properties
              <span className="text-xs">▼</span>
            </h2>

            <h2 className="flex items-center gap-2 border px-4 py-2 rounded-full text-gray-700 hover:bg-gray-100 transition w-full md:w-auto justify-center">
              <FaMapMarkerAlt className="text-gray-500" />
              Location
              <span className="text-xs">▼</span>
            </h2>

            <h2 className="flex items-center gap-2 border px-4 py-2 rounded-full text-gray-700 hover:bg-gray-100 transition w-full md:w-auto justify-center">
              <FaFilter className="text-gray-500" />
              Types
              <span className="text-xs">▼</span>
            </h2>
          </div>
        </div>
      </div>

    </div>
      <Properties/>
      <AboutUs/>
      <Sectors/>
      <FAQ/>
      <Contact/>
    </>
  );
};

export default Home;
