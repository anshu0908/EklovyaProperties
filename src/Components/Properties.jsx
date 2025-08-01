import React from "react";
import PropertyCard from "./PropertyCard";

const properties = [
  {
    type: "Rent",
    price: "$230 USD/month",
    title: "Serenity heights apartment",
    location: "Walkers Ridge Cir Powhatan",
    image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=800&q=80",
  },
  {
    type: "Sell",
    price: "$60000 USD",
    title: "Maple haven house",
    location: "101 Heritage Ln, Oldtown",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
  },
  {
    type: "Rent",
    price: "$400 USD/month",
    title: "Rowview residences bungalow",
    location: "789 Highrise Ave, Metro",
    image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=800&q=80",
  },
];

const Properties = () => {
  return (
    <div className="bg-white py-16 px-16">
      <div className="flex justify-between items-center mb-10">
        <h2 className="text-4xl font-bold">Popular <span className=""> properties </span></h2>
        <button className="text-sm font-semibold flex items-center gap-2 ">
          View All <span className="text-lg">→</span>
        </button>
      </div>

      <div className="grid grid-cols-3 gap-8">
        {properties.map((property, index) => (
          <PropertyCard key={index} property={property} />
        ))}
      </div>
    </div>
  );
};

export default Properties;
