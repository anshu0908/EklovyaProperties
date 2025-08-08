import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const ContactUsPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [openIndex, setOpenIndex] = useState(null);

  const onSubmit = (data) => {
    console.log(data);
    alert("Your message has been submitted!");
  };

  const faqData = [
    {
      question: "How can I set a realistic budget before buying a home?",
      answer:
        "Start by assessing your income, expenses, and debts. Aim to spend no more than 30-40% of your monthly income on housing.",
    },
    {
      question: "Which Gurgaon sectors are best suited for families?",
      answer:
        "Sectors like 50, 57, and 70 are well-known for family-friendly amenities, schools, and parks.",
    },
    {
      question: "What documents should I prepare before making a purchase?",
      answer:
        "Key documents include your ID proof, address proof, income proof, and bank statements. We can guide you through the checklist.",
    },
    {
      question: "Is property registration a legal requirement?",
      answer:
        "Yes, property registration is mandatory to establish legal ownership and is handled through local authorities.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      {/* Hero Section */}
      <div className="w-full h-[60vw] md:h-[40vw] bg-cover bg-center relative flex items-center bg-[url('https://cdn.prod.website-files.com/67f4e51e5c8ae21dfb2629b0/67f4e9456a9501f92ef078eb_-%20(3).png')]">
        <div className="absolute z-20 top-[40%] left-[8%] text-white">
          <p className="text-sm sm:text-md md:text-lg font-light mb-2">
            Home / Contact Us
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-semibold">
            Contact Us
          </h1>
        </div>
      </div>

      {/* Contact Form + Info Section */}
      <div className="text-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
          <h2 className="text-3xl sm:text-4xl underline-offset-8 text-center font-bold mb-12 sm:mb-20">
            Get in touch
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
            {/* Contact Form */}
            <div className="bg-zinc-100 shadow-lg rounded-lg p-4 sm:p-6">
              <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Name"
                    {...register("name", { required: true })}
                    className="border border-gray-300 rounded-md px-4 py-2 w-full"
                  />
                  <input
                    type="email"
                    placeholder="Email Address"
                    {...register("email", { required: true })}
                    className="border border-gray-300 rounded-md px-4 py-2 w-full"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <select
                    {...register("interest", { required: true })}
                    className="appearance-none border text-gray-500 border-gray-300 rounded-md px-4 py-2 w-full"
                  >
                    <option value="">Interested In</option>
                    <option value="rent">Rent</option>
                    <option value="purchase">Purchase</option>
                    <option value="buying">Buying</option>
                  </select>
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    {...register("phone", { required: true })}
                    className="border border-gray-300 rounded-md px-4 py-2 w-full"
                  />
                </div>

                <textarea
                  placeholder="Message"
                  {...register("message", { required: true })}
                  className="border border-gray-300 rounded-md px-4 py-2 h-28 w-full"
                />

                <button
                  type="submit"
                  className="bg-black text-white px-6 py-2 rounded-md shadow-md hover:bg-white hover:text-black transition w-full sm:w-auto"
                >
                  Submit
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-6 lg:ml-10">
              <div>
                <h4 className="text-xl font-semibold mb-1">Call Us</h4>
                <p className="text-gray-600 mb-2">
                  Mon-Sat from 9am to 8pm IST.
                </p>
                <a
                  href="#"
                  className="inline-block font-medium text-white border-1 bg-black py-1 px-2 rounded-md"
                >
                  +91 70XXX XXX92
                </a>
              </div>

              <div>
                <h4 className="text-xl font-semibold mb-1">Visit Us</h4>
                <p className="text-gray-600 mb-2">
                  Sector 14, Gurugram, Haryana, India
                </p>
                <a
                  href="#"
                  className="inline-block font-medium text-white border-1 bg-black py-1 px-2 rounded-md"
                >
                  Get Directions
                </a>
              </div>

              <div>
                <h4 className="text-xl font-semibold mb-1">Live Chat</h4>
                <p className="text-gray-600 mb-2">
                  Chat with us instantly for quick assistance.
                </p>
                <a
                  href="#"
                  className="inline-block font-medium text-white border-1 bg-black py-1 px-2 rounded-md"
                >
                  Start Chat
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Google Map */}
        <div className="w-full flex justify-center py-8 px-4">
          <div className="w-full sm:w-[80%] md:w-[70%] lg:w-[60%] max-w-4xl rounded-lg shadow-2xl overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.213042931692!2d77.04497001897043!3d28.473130057818665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1900371e1c7b%3A0x818f663933721a4b!2sEklovya%20properties!5e0!3m2!1sen!2sin!4v1754662554844!5m2!1sen!2sin"
              className="w-full h-[300px] sm:h-[400px] md:h-[450px]"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-2xl mx-auto px-4 sm:px-6 py-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-8">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqData.map((faq, index) => (
              <div
                key={index}
                className="bg-white shadow rounded-lg overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex justify-between items-center px-4 py-3 text-left font-medium text-gray-800 hover:bg-gray-100 focus:outline-none"
                >
                  <span>{faq.question}</span>
                  {openIndex === index ? (
                    <FaChevronUp className="text-gray-500" />
                  ) : (
                    <FaChevronDown className="text-gray-500" />
                  )}
                </button>
                {openIndex === index && (
                  <div className="px-4 pb-4 text-gray-600">{faq.answer}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUsPage;
