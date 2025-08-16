import React from "react";
import { FaHouseChimney } from "react-icons/fa6";
import {
  FileText,
  FileBadge,
  Home,
  Map,
  Users,
  ClipboardList,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    icon: <FileText className="w-10 h-10 text-black" />,
    title: "Investment analysis",
    description: "Insights and advice on real estate investment opportunities.",
  },
  {
    icon: <FileBadge className="w-10 h-10 text-black" />,
    title: "Marketing plans",
    description: "Tailored marketing strategies to showcase properties effectively.",
  },
  {
    icon: <Home className="w-10 h-10 text-black" />,
    title: "Financial guidance",
    description: "Assistance with financing options and mortgage advice.",
  },
  {
    icon: <Map className="w-10 h-10 text-black" />,
    title: "Location scouting",
    description: "Helping you find the best property locations across the city.",
  },
  {
    icon: <Users className="w-10 h-10 text-black" />,
    title: "Client support",
    description: "Dedicated support team to guide you through every step.",
  },
  {
    icon: <ClipboardList className="w-10 h-10 text-black" />,
    title: "Legal assistance",
    description: "Support with documentation, registration, and legal compliance.",
  },
];

const AboutPage = () => {
  return (
    <>
     
      <div className="w-full h-[60vw] md:h-[40vw] bg-cover bg-center relative flex items-center bg-[url('https://cdn.prod.website-files.com/67f4e51e5c8ae21dfb2629b0/67f4e9456a9501f92ef078eb_-%20(3).png')]">
        <div className="absolute z-20 top-[40%] left-[8%] text-white">
          <p className="text-sm sm:text-md md:text-lg font-light mb-2">Home / About</p>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-semibold">About Us</h1>
        </div>
      </div>

      
      <div className="py-16 bg-white text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12">What we do</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-7xl mx-auto px-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-100 rounded-xl p-8 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="flex justify-center mb-4">{service.icon}</div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600 text-sm sm:text-base">{service.description}</p>
            </div>
          ))}
        </div>
      </div>

     
      <div className="bg-black text-white md:h-[40vw] mb-10  md:mb-[22vw] py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-semibold leading-tight">
              Our Mission: <br />
              Building the Future
            </h2>
          </div>
          <div className="text-base sm:text-lg leading-relaxed">
            <p>
              At Eklovya Properties, our mission is clear: to redefine the landscape of real estate by creating vibrant communities that inspire and endure. <br />
              We are dedicated to crafting innovative spaces that not only meet the needs of today but also shape the future of living.
            </p>
          </div>
        </div>

       
        <div className="mt-16 flex justify-center">
          <img
            src="https://cdn.prod.website-files.com/67f4e51e5c8ae21dfb2629b0/67f4e9456a9501f92ef078eb_-%20(3).png"
            alt="Mission Visual"
            className="w-full max-w-5xl h-[40vw] rounded-2xl object-cover shadow-lg"
          />
        </div>
      </div>

      
      <div className="py-3 md:w-[95%] bg-black px-4 rounded-full md:py-7  mb-10 md:mx-auto mx-2">
        <p className="text-white text-center text-xs md:text-4xl font-semibold">
          Eklovya Properties - Your Gateway to Smart and Secure Living.
        </p>
      </div>

      
      <div className="relative">
        <div className="relative w-full h-[36vh] md:h-[70vh] rounded-xl overflow-hidden">
          <img
            src="https://cdn.prod.website-files.com/67f4e51e5c8ae21dfb2629b0/67f4e9456a9501f92ef078eb_-%20(3).png"
            alt="Property Background"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40 flex flex-col items-start justify-center px-6 md:px-20">
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white max-w-3xl">
              Are you looking to buy <br /> or rent a property?
            </h2>
            <button className="mt-8 bg-white text-black font-semibold rounded-full px-6 py-3 flex items-center gap-2 hover:scale-105 transition">
              Get In Touch <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
