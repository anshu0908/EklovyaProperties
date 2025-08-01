import React from "react";

const Contact = () => {
  return (
    <div className="flex flex-wrap min-h-[400px] md:h-[30vw] justify-center items-start mt-2  gap-8 p-4 sm:p-6">
      
      <div className="flex flex-col md:flex-row bg-gray-100 rounded-xl overflow-hidden shadow-md w-full max-w-4xl">
        <img
          src="https://images.unsplash.com/photo-1572120360610-d971b9d7767c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aG91c2V8ZW58MHx8MHx8fDA%3D"
          alt="House with keys"
          className="w-full md:w-1/2 h-64 md:h-auto object-cover rounded-t-lg md:rounded-l-lg md:rounded-tr-none"
        />
        <div className="p-6 flex flex-col justify-between">
          <div>
            <span className="inline-block bg-white text-sm font-semibold text-gray-600 px-3 py-1 rounded-full mb-4">
              Selling
            </span>
            <h2 className="text-2xl font-bold text-gray-900 leading-snug">
              Navigating real estate <br />
              for smart investments <br />
              and living
            </h2>
          </div>
          <p className="text-sm text-gray-500 mt-4">June 15, 2024</p>
        </div>
      </div>

      
      <div className="bg-black text-white rounded-xl p-6 sm:p-8 max-w-md w-full shadow-md">
        <h3 className="text-2xl font-bold mb-4">
          Do you still have a <br /> question?
        </h3>
        <h2 className="text-gray-400 mb-6">
          Have about our expert agents. What specific information are you
          looking for?
        </h2>
        <button className="bg-white text-black font-medium px-6 py-3 rounded-full hover:bg-gray-200 transition">
          Contact us
        </button>
      </div>
    </div>
  );
};

export default Contact;
