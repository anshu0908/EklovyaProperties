import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const generalFAQs = [
  {
    question: 'How do I determine my budget for buying a home?',
    answer:
      'To determine your budget, consider your income, monthly expenses, savings, and the amount you can afford for a down payment and loan EMI.'
  },
  {
    question: 'How long does it take to find and purchase a home?',
    answer:
      'The time can vary but generally takes 30 to 60 days depending on market conditions, financing, and legal formalities.'
  },
  {
    question: 'Which are the best sectors in Gurugram for residential investment?',
    answer:
      'Sectors like 57, 49, 67, and DLF Phase 1-5 are popular due to great infrastructure, metro connectivity, and proximity to business hubs.'
  },
  {
    question: 'Is it better to buy a flat or plot in Gurugram?',
    answer:
      'Flats offer modern amenities and security, while plots provide customization freedom. For investment, plots in emerging sectors like 95 or 99 are gaining traction.'
  },
  {
    question: 'Are property prices in Gurugram negotiable?',
    answer:
      'Yes, especially in under-construction or resale properties. Builders might offer discounts or waive off registration/maintenance charges.'
  },
  {
    question: 'What documents are required to buy a property in Gurugram?',
    answer:
      'You will need ID proof, PAN card, address proof, bank statements, and legal documents like sale deed, property title, and builder NOC.'
  },
  {
    question: 'How is the resale value of properties in Gurugram?',
    answer:
      'Properties in developed sectors and near Cyber City or Golf Course Road have high resale value. Location and builder reputation matter most.'
  }
];

const GeneralFAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto text-center mt-6 px-4 sm:px-6 py-10">
      <h3 className="text-4xl font-bold mb-14">General question</h3>

      {generalFAQs.map((item, index) => (
        <div
          key={index}
          className="mb-4 bg-gray-100 border border-gray-300 rounded-xl overflow-hidden"
        >
          <button
            onClick={() => toggleAnswer(index)}
            className="w-full flex flex-wrap justify-between items-center text-left px-6 py-4 text-lg font-medium"
          >
            <span className="w-[90%] sm:w-auto">{item.question}</span>
            {openIndex === index ? (
              <FaChevronUp className="text-sm" />
            ) : (
              <FaChevronDown className="text-sm" />
            )}
          </button>

          <div
            className={`px-6 text-gray-600 transition-all duration-300 ease-in-out ${
              openIndex === index
                ? 'max-h-40 opacity-100 py-2'
                : 'max-h-0 opacity-0 py-0'
            } overflow-hidden`}
          >
            {item.answer}
          </div>
        </div>
      ))}
    </div>
  );
};

export default GeneralFAQ;
