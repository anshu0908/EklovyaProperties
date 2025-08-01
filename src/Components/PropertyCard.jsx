import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";

const PropertyCard = ({ property }) => {
  return (
    <div className="rounded-2xl overflow-hidden shadow-md bg-white w-full max-w-sm sm:max-w-xs md:max-w-sm">
      <div className="relative">
        <img
          src={property.image}
          alt={property.title}
          className="w-full h-48 sm:h-56 md:h-64 object-cover"
        />
        <span className="absolute top-4 left-4 bg-white text-black text-xs font-semibold px-3 py-1 rounded-full">
          {property.type}
        </span>
        <span className="absolute top-4 right-4 bg-black text-white text-xs font-semibold px-3 py-1 rounded-full">
          {property.price}
        </span>
      </div>
      <div className="p-4">
        <h3 className="text-base sm:text-lg font-semibold mb-1">
          {property.title}
        </h3>
        <h2 className="text-sm text-gray-500 flex items-center flex-wrap">
          <FaMapMarkerAlt className="mr-2" />
          {property.location}
        </h2>
      </div>
    </div>
  );
};

export default PropertyCard;
