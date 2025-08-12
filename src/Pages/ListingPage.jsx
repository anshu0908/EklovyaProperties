import React, { useState } from "react";
import ListingCard from "./ListingCard";

const propertiesData = [
  {
    id: 1,
    title: "DLF Phase 1 Luxury Villa",
    price: "₹4.5 Cr",
    location: "DLF Phase 1, Gurugram",
    type: "Sell",
    rooms: 5,
    baths: 4,
    area: 4500,
    image: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=800&q=80",
  },
  {
    id: 2,
    title: "Golf Course Road Apartment",
    price: "₹55,000/month",
    location: "Golf Course Road, Gurugram",
    type: "Rent",
    rooms: 3,
    baths: 2,
    area: 1800,
    image: "https://images.unsplash.com/photo-1599423300746-b62533397364?w=800&q=80",
  },
  {
    id: 3,
    title: "Sohna Road Modern Flat",
    price: "₹65,000/month",
    location: "Sohna Road, Gurugram",
    type: "Rent",
    rooms: 4,
    baths: 3,
    area: 2100,
    image: "https://images.unsplash.com/photo-1560185127-6ed189bf02f4?w=800&q=80",
  },
  {
    id: 4,
    title: "Sector 57 Independent House",
    price: "₹2.8 Cr",
    location: "Sector 57, Gurugram",
    type: "Sell",
    rooms: 6,
    baths: 5,
    area: 5000,
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
  },
  {
    id: 5,
    title: "MG Road Studio Apartment",
    price: "₹35,000/month",
    location: "MG Road, Gurugram",
    type: "Rent",
    rooms: 1,
    baths: 1,
    area: 650,
    image: "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=800&q=80",
  },
  {
    id: 6,
    title: "Cyber City Penthouse",
    price: "₹7.2 Cr",
    location: "Cyber City, Gurugram",
    type: "Sell",
    rooms: 4,
    baths: 4,
    area: 3800,
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
  },
];

const ListingPage = () => {
  const [filter, setFilter] = useState("All");

  const filteredProperties =
    filter === "All"
      ? propertiesData
      : propertiesData.filter((p) => p.type === filter);

  return (
    <div className="bg-gray-100 min-h-screen">
      
      <div className="bg-black min-h-[40vh] flex flex-col items-center justify-center text-center px-4">
        <h1 className="pt-20 text-white text-3xl sm:text-5xl font-bold mb-8">
          Our Properties
        </h1>
        <div className="flex flex-wrap justify-center gap-4">
          {["All", "Rent", "Sell"].map((btn) => (
            <button
              key={btn}
              onClick={() => setFilter(btn)}
              className={`px-6 sm:px-8 py-2 sm:py-3 text-base sm:text-lg font-medium rounded-full border border-white transition ${
                filter === btn
                  ? "bg-white text-black"
                  : "text-white hover:bg-white hover:text-black"
              }`}
            >
              {btn}
            </button>
          ))}
        </div>
      </div>

      
      <div className="max-w-6xl mx-auto p-4 sm:p-6 grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
        {filteredProperties.map((property) => (
          <ListingCard key={property.id} {...property} />
        ))}
      </div>
    </div>
  );
};

export default ListingPage;
