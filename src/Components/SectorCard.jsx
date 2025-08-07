import React, { useState } from "react";

const sectors = [
  {
    name: "Sector 14",
    description:
      "Sector 14 is centrally located in Gurugram, known for its vibrant HUDA market, excellent connectivity, and proximity to schools, hospitals, and commercial hubs.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/2/28/HUDA_Market_Sector_14_Gurgaon.jpg",
  },
  {
    name: "Sector 15",
    description:
      "Sector 15 blends quiet residential living with easy access to local amenities and nearby Metro connectivity, making it ideal for families and young professionals.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/0/0b/Residential_Street_Sector_15_Gurgaon.jpg",
  },
  {
    name: "Sector 17",
    description:
      "Sector 17 offers a peaceful, upscale residential ambience surrounded by tree-lined streets and gated communities—perfect for serene family life.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Sector_17_Residential_Gurgaon.jpg/640px-Sector_17_Residential_Gurgaon.jpg",
  },
  {
    name: "Sector 31",
    description:
      "Sector 31 is an emerging zone in New Gurugram, featuring modern apartment complexes and upcoming metro access, poised for rapid infrastructure growth.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Golf_Course_Extn_Road_Gurgaon.jpg/640px-Golf_Course_Extn_Road_Gurgaon.jpg",
  },
  {
    name: "Sector 40",
    description:
      "Sector 40 is another rising suburb with contemporary developments, expanding amenities, and convenient access to major roads—great for new families and investors.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Modern_Apartment_Sector_40_Gurgaon.jpg/640px-Modern_Apartment_Sector_40_Gurgaon.jpg",
  },
];

const SectorCard = ({ name, description, image }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative bg-gray-100 p-6 sm:p-6 md:p-10 rounded-lg flex flex-col md:flex-row justify-between items-start md:items-center gap-4 sm:gap-6 transition-all duration-300"
    >
      <div className="flex-1 w-full">
        <p
          className={`text-sm sm:text-base md:text-lg transition-colors duration-300 ${
            hovered ? "text-black font-medium" : "text-gray-600"
          }`}
        >
          {description}
        </p>
      </div>

      <div className="flex items-center gap-3 sm:gap-4 w-full md:w-auto justify-between md:justify-end mt-4 md:mt-0">
        <h3
          className={`text-lg sm:text-xl md:text-2xl font-semibold transition-colors duration-300 ${
            hovered ? "text-black" : "text-gray-500"
          }`}
        >
          {name}
        </h3>

        {hovered && (
          <img
            src={image}
            alt={name}
            className="w-24 sm:w-28 md:w-32 h-16 sm:h-20 object-cover rounded-lg transition-all duration-300 shadow-md"
          />
        )}
      </div>

      <div
        className={`absolute bottom-3 left-1/2 transform -translate-x-1/2 h-0.5 bg-black transition-all duration-300 ${
          hovered ? "w-[60%] sm:w-[70%] md:w-[80%] opacity-100" : "w-0 opacity-0"
        }`}
      />
    </div>
  );
};

const Sectors = () => {
  return (
    <section className="max-w-6xl mx-auto px-4 py-16 space-y-10">
      <div className="text-center space-y-4 px-2 sm:px-6">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
          Settle in your dream location
        </h2>
        <p className="text-gray-600 text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
          Imagine waking up each morning in a place that feels like it was
          tailor-made just for you—a sanctuary that aligns with your lifestyle,
          preferences, and aspirations.
        </p>
      </div>

      <div className="space-y-8 px-2 sm:px-0">
        {sectors.map((sector, index) => (
          <SectorCard
            key={index}
            name={sector.name}
            description={sector.description}
            image={sector.image}
          />
        ))}
      </div>
    </section>
  );
};

export default Sectors;
