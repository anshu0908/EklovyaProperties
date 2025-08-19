import React, { useState } from "react";
import { FaFilter, FaHome, FaMapMarkerAlt, FaSearch } from "react-icons/fa";
import Properties from "./Properties";
import FAQ from "./FAQ";
import AboutUs from "./AboutUs";
import Contact from "./contact";
import Sectors from "./SectorCard";
import ListingPage from "../Pages/ListingPage";
import PropertyDetail from "../Pages/PropertyDetail";

const Home = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [selected, setSelected] = useState({
    property: "Properties",
    location: "Location",
    type: "Types",
  });

  const toggleDropdown = (menu) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
  };

  const handleSelect = (menu, value) => {
    setSelected((prev) => ({ ...prev, [menu]: value }));
    setOpenDropdown(null);
  };

  return (
    <>
      <div
        className="relative h-[48vw] min-h-[500px] bg-cover bg-center bg-no-repeat bg-[url('https://cdn.prod.website-files.com/67f4e51e5c8ae21dfb2629b0/67f4e9456a9501f92ef078eb_-%20(3).png')] w-full flex items-center justify-center px-4 md:px-6"
      >
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative z-10 text-white max-w-4xl text-left md:px-2">
          <h1 className="text-3xl md:text-6xl font-semibold leading-snug md:leading-tight">
            Find the right and best <br />
            home for your family
          </h1>
        </div>

        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 z-20 w-full px-4">
          <div className="bg-white rounded-2xl shadow-lg px-4 py-4 flex flex-col md:flex-row md:flex-nowrap items-stretch md:items-center gap-4 md:gap-6 max-w-6xl w-full mx-auto">

           
            <div className="flex flex-1 items-center bg-gray-100 px-4 py-2 rounded-full shadow-sm">
              <FaSearch className="text-gray-400 mr-2" />
              <input
                type="text"
                placeholder="Search for property"
                className="bg-transparent outline-none w-full text-gray-700 placeholder-gray-400"
              />
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-5 py-2 rounded-full whitespace-nowrap ml-2 transition">
                Search
              </button>
            </div>

           
            <div className="flex flex-col md:flex-row flex-wrap md:flex-nowrap gap-3 justify-between w-full md:w-auto relative">

             
              <div className="relative w-full md:w-auto">
                <button
                  onClick={() => toggleDropdown("property")}
                  className="cursor-pointer flex items-center gap-2 border px-4 py-2 rounded-full text-gray-700 hover:bg-gray-100 transition w-full md:w-auto justify-center md:justify-start"
                >
                  <FaHome className="text-gray-500" />
                  {selected.property}
                  <span className="text-xs ml-1">▼</span>
                </button>
                {openDropdown === "property" && (
                  <div className="absolute top-full mt-2 left-0 bg-white shadow-md rounded-lg py-2 w-full md:w-40 z-30">
                    {["Rent", "Sale"].map((option) => (
                      <p
                        key={option}
                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-gray-700"
                        onClick={() => handleSelect("property", option)}
                      >
                        {option}
                      </p>
                    ))}
                  </div>
                )}
              </div>

              
              <div className="relative w-full md:w-auto">
                <button
                  onClick={() => toggleDropdown("location")}
                  className="cursor-pointer flex items-center gap-2 border px-4 py-2 rounded-full text-gray-700 hover:bg-gray-100 transition w-full md:w-auto justify-center md:justify-start"
                >
                  <FaMapMarkerAlt className="text-gray-500" />
                  {selected.location}
                  <span className="text-xs ml-1">▼</span>
                </button>
                {openDropdown === "location" && (
                  <div className="absolute top-full mt-2 left-0 bg-white shadow-md rounded-lg py-2 w-full md:w-40 z-30 max-h-[150px] overflow-y-auto">
                    {["Sector 14", "Sector 15", "Sector 17", "Sector 31", "Sector 40"].map(
                      (loc) => (
                        <p
                          key={loc}
                          className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-gray-700"
                          onClick={() => handleSelect("location", loc)}
                        >
                          {loc}
                        </p>
                      )
                    )}
                  </div>
                )}
              </div>

             
              <div className="relative w-full md:w-auto">
                <button
                  onClick={() => toggleDropdown("type")}
                  className="cursor-pointer flex items-center gap-2 border px-4 py-2 rounded-full text-gray-700 hover:bg-gray-100 transition w-full md:w-auto justify-center md:justify-start"
                >
                  <FaFilter className="text-gray-500" />
                  {selected.type}
                  <span className="text-xs ml-1">▼</span>
                </button>
                {openDropdown === "type" && (
                  <div className="absolute top-full mt-2 left-0 bg-white shadow-md rounded-lg py-2 w-full md:w-40 z-30">
                    {["Independent", "Dependent"].map((option) => (
                      <p
                        key={option}
                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-gray-700"
                        onClick={() => handleSelect("type", option)}
                      >
                        {option}
                      </p>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Properties />
      <AboutUs />
      <Sectors />
      <FAQ />
      <Contact />
    
    </>
  );
};

export default Home;
