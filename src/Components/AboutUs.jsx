import React from "react";
import { FaDollarSign, FaGavel, FaUserTie } from "react-icons/fa";

const AboutUs = () => {
  return (
    <div className="bg-black text-white px-4 md:px-6 py-16 md:py-20 mt-10">
      
      <div className="max-w-6xl mx-auto text-center md:text-left">
        <h2 className="text-xl md:text-3xl font-semibold mb-6 md:mb-8">About us</h2>
        <p className="text-2xl md:text-5xl font-semibold leading-snug">
          Our mission is simple, to provide unparalleled expertise, guidance,
          and support to our clients across their real estate journey.
        </p>
      </div>

      <hr className="my-10 md:my-12 border-gray-700" />

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-10 text-center md:text-left">
        
        <div className="flex flex-col md:flex-row items-center md:items-start space-y-3 md:space-y-0 md:space-x-4">
          <div className="text-white text-3xl md:text-4xl">
            <FaDollarSign />
          </div>
          <div>
            <h3 className="text-lg md:text-xl font-semibold">Affordable Price</h3>
            <p className="text-sm text-gray-300 mt-1 md:mt-2">
              Offering competitive rates that make quality accessible to all.
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center md:items-start space-y-3 md:space-y-0 md:space-x-4">
          <div className="text-white text-3xl md:text-4xl">
            <FaGavel />
          </div>
          <div>
            <h3 className="text-lg md:text-xl font-semibold">Clear Legality</h3>
            <p className="text-sm text-gray-300 mt-1 md:mt-2">
              Ensuring transparent and compliant legal processes.
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center md:items-start space-y-3 md:space-y-0 md:space-x-4">
          <div className="text-white text-3xl md:text-4xl">
            <FaUserTie />
          </div>
          <div>
            <h3 className="text-lg md:text-xl font-semibold">Experienced Agent</h3>
            <p className="text-sm text-gray-300 mt-1 md:mt-2">
              Guided by professionals with expertise in the industry.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
