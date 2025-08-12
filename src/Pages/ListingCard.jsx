import React from "react";
import { MapPin, Bath, Bed, Maximize } from "lucide-react";

const ListingCard = ({ type, image, title, location, price, rooms, baths, area }) => {
  return (
    <div className="rounded-2xl overflow-hidden shadow-lg bg-white transition-transform transform hover:scale-[1.02]">
      
      <div className="relative">
        <img src={image} alt={title} className="w-full h-56 object-cover" />
        <span className="absolute top-4 left-4 bg-black text-white text-md font-medium px-3 py-1 rounded-full shadow-md">
          {type}
        </span>
      </div>

      
      <div className="p-5">
        
        <div className="flex justify-between items-start mb-3">
          <div>
            <h3 className="text-xl font-semibold">{title}</h3>
            <div className="flex items-center text-gray-500 text-sm">
              <MapPin className="w-4 h-4 mr-1" />
              {location}
            </div>
          </div>
          <span className="text-lg font-bold text-black">{price}</span>
        </div>

        
        <div className="flex justify-between text-sm text-gray-700 mt-4 border-t pt-3">
          <div className="flex items-center space-x-1">
            <Bed className="w-5 h-5" />
            <span>{rooms} Rooms</span>
          </div>
          <div className="flex items-center space-x-1">
            <Bath className="w-5 h-5" />
            <span>{baths} Baths</span>
          </div>
          <div className="flex items-center space-x-1">
            <Maximize className="w-5 h-5" />
            <span>{area} Sq.ft</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListingCard;
