import React from "react";
import PropertyCard from "./PropertyCard";

const properties = [
  {
    type: "Rent",
    price: "₹18,000/month",
    title: "DLF Phase 3 Apartment",
    location: "DLF Phase 3, Gurugram, Haryana",
    image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=800&q=80",
  },
  {
    type: "Sell",
    price: "₹85 Lakh",
    title: "Sushant Lok Villa",
    location: "Sushant Lok 1, Sector 43, Gurugram",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
  },
  {
    type: "Rent",
    price: "₹25,000/month",
    title: "Golf Course Road Flat",
    location: "Golf Course Road, Sector 56, Gurugram",
    image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=800&q=80",
  },
];


const Properties = () => {
  return (
    <div className="bg-white py-10 px-4 sm:px-8 md:px-12 lg:px-16">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-10">
        <h2 className="text-3xl sm:text-4xl font-bold">
          Popular <span className=""> properties </span>
        </h2>
        <button className="text-sm font-semibold flex items-center gap-2">
          View All <span className="text-lg">→</span>
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {properties.map((property, index) => (
          <PropertyCard key={index} property={property} />
        ))}
      </div>
    </div>
  );
};

export default Properties;
