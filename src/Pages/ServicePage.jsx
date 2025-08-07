import React from "react";
import {
  Home,
  Handshake,
  HandCoins,
  BarChart3,
  Building2,
  KeyRound,
} from "lucide-react";
import Navbar from "../Components/Navbar";

const services = [
  {
    icon: Home,
    title: "Buying properties",
    text: "Purchasing a property is a significant decision, whether it's your first home, an investment property, or a vacation retreat.",
  },
  {
    icon: Handshake,
    title: "Selling properties",
    text: "Selling a property can be a complex and challenging process, but with the right guidance and resources, you can achieve a successful sale.",
  },
  {
    icon: HandCoins,
    title: "Renting properties",
    text: "Renting out a property can be a lucrative way to generate income, but it requires careful planning and management to ensure success.",
  },
  {
    icon: BarChart3,
    title: "Market analysis",
    text: "We take pride in offering a comprehensive suite of specialized real estate services tailored to meet your unique needs.",
  },
  {
    icon: Building2,
    title: "Property selling",
    text: "Our diverse range of services is designed to provide you with exceptional solutions, whether you're buying, selling, renting, or investing in property.",
  },
  {
    icon: KeyRound,
    title: "Rental services",
    text: "We assist property owners in marketing their rentals, screening potential tenants, and managing leases to ensure a smooth rental experience.",
  },
];

const ServicePage = () => {
  return (
    <>
      <div className="bg-white mb-15 text-center bg-[url('https://cdn.prod.website-files.com/67f4e51e5c8ae21dfb2629b0/67f4e9456a9501f92ef078eb_-%20(3).png')]">
        <div className="bg-black/40 py-20 pt-30 h-full">
          <h1 className="text-5xl mb-10 text-white font-bold ">Services</h1>
          <h2 className="text-4xl text-white md:text-5xl font-bold mb-6">
            Experience our diverse range
          </h2>
          <p className="text-white max-w-3xl mx-auto mb-12 text-base md:text-lg">
            At Eklovya Properties, we take pride in offering a comprehensive
            suite of specialized services tailored to meet your unique needs.
            Our diverse range of services is designed to provide you with
            exceptional solutions, whether you’re looking for expert advice,
            innovative strategies, or hands-on assistance.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        <div className="rounded-xl overflow-hidden shadow-md">
          <img
            src="https://cdn.prod.website-files.com/67f4e51e5c8ae21dfb2629b0/67f4e9456a9501f92ef078eb_-%20(3).png"
            alt="Modern House"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="rounded-xl overflow-hidden shadow-md">
          <img
            src="https://cdn.prod.website-files.com/67f4e51e5c8ae21dfb2629b0/67f4e9456a9501f92ef078eb_-%20(3).png"
            alt="Model Building"
            className="w-full h-full object-cover md:block hidden"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-7xl mx-auto mb-20 mt-10 px-4">
        {services.map((item, index) => (
          <div
            key={index}
            className="bg-gray-100 rounded-xl p-8 shadow-sm hover:shadow-md transition-all duration-300"
          >
            <item.icon className="flex justify-center mb-4" />
            <h3 className="text-lg sm:text-xl font-semibold mb-2">
              {item.title}
            </h3>
            <p className="text-gray-600 text-sm sm:text-base">{item.text}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default ServicePage;
