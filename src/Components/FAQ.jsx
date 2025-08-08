import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const categories = [
  { id: 'buy', name: 'Buying Property' },
  { id: 'rent', name: 'Renting Property' },
  { id: 'invest', name: 'Investment in Gurgaon' },
];

const faqData = {
  buy: [
    {
      question: 'How can I set a realistic budget before buying a home?',
      answer:
        'Review your income, monthly expenses, savings, and loan eligibility. In Gurgaon, prices differ greatly between sectors.'
    },
    {
      question: 'Which Gurgaon sectors are best suited for families?',
      answer:
        'Sectors 57, 49, 50, and DLF Phase 4-5 are highly preferred due to good schools, malls, and metro connectivity.'
    },
    {
      question: 'What documents should I prepare before making a purchase?',
      answer:
        'You will need ID proof, PAN card, address proof, bank statements, sale deed, property title papers, and a No Objection Certificate from the builder.'
    },
    {
      question: 'Is property registration a legal requirement?',
      answer:
        'Yes, it is mandatory to register the property with the Haryana government to complete ownership transfer.'
    },
    {
      question: 'Can property prices be negotiated in Gurgaon?',
      answer:
        'Yes, both in resale and under-construction projects. Negotiations can often save you between 2% and 5% or even more.'
    },
    {
      question: 'Should I buy a ready-to-move-in property or under-construction?',
      answer:
        'Ready-to-move-in properties offer immediate possession and no construction risk, while under-construction options can be cheaper but involve waiting.'
    },
    {
      question: 'How can I verify the legal status of a property in Gurgaon?',
      answer:
        'Check the RERA registration, verify the title deed, and ensure there are no pending litigations or dues on the property.'
    }
  ],
  rent: [
    {
      question: 'What is the average monthly rent for a 2BHK in Gurgaon?',
      answer:
        'Prime sectors usually range from ₹25,000 to ₹50,000 per month, depending on amenities and location.'
    },
    {
      question: 'Do I need to have a registered rental agreement?',
      answer:
        'Yes, it provides legal protection and acts as proof of tenancy. Always ensure proper stamp duty is paid.'
    },
    {
      question: 'Which sectors are best for renting near Cyber City?',
      answer:
        'DLF Phase 2, MG Road, and Sector 24 are popular choices among professionals working in Cyber City.'
    },
    {
      question: 'Are landlords allowed to ask for a security deposit?',
      answer:
        'Yes, most landlords request 1–2 months’ rent as a refundable security deposit.'
    },
    {
      question: 'Is living in a gated community worth the cost?',
      answer:
        'Yes, gated societies offer better safety, regular maintenance, and shared amenities compared to standalone buildings.'
    },
    {
      question: 'Can I negotiate the rent in Gurgaon?',
      answer:
        'Yes, especially for long-term leases or if the property has been vacant for some time.'
    },
    {
      question: 'What are common additional costs apart from rent?',
      answer:
        'You may need to pay for maintenance charges, electricity, water, and parking separately.'
    }
  ],
  invest: [
    {
      question: 'Which Gurgaon localities have the highest growth potential?',
      answer:
        'Sectors along the Dwarka Expressway, such as 102–113, are witnessing fast appreciation due to major infrastructure projects.'
    },
    {
      question: 'Is buying a plot better than purchasing an apartment?',
      answer:
        'Plots generally offer higher appreciation potential and flexibility, while apartments provide rental income and community amenities.'
    },
    {
      question: 'What kind of ROI can I expect from Gurgaon real estate?',
      answer:
        'In high-demand sectors, an annual appreciation of 8–12% is achievable in the medium term.'
    },
    {
      question: 'Is it wise to invest in an under-construction project?',
      answer:
        'Yes, if it’s from a reputed builder. Prices are usually lower, but always verify RERA registration and delivery timelines.'
    },
    {
      question: 'How safe is it to invest in Gurgaon properties?',
      answer:
        'It is generally safe if you choose RERA-approved projects with clear titles and work with trusted developers and agents.'
    },
    {
      question: 'What are the risks of short-term property investment?',
      answer:
        'Short-term investments can be risky due to market fluctuations and higher transaction costs like stamp duty and brokerage.'
    },
    {
      question: 'How can I track upcoming real estate developments in Gurgaon?',
      answer:
        'Follow RERA updates, subscribe to local property news portals, and visit real estate expos for project announcements.'
    }
  ]
};


const FAQ = () => {
  const [activeCategory, setActiveCategory] = useState('buy');
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto text-center mt-8 px-4 sm:px-6 py-6">
      <h3 className="text-4xl sm:text-5xl font-semibold mb-10">FAQ's</h3>

      
      <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-8">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => {
              setActiveCategory(cat.id);
              setOpenIndex(null);
            }}
            className={`px-4 sm:px-5 py-2 border-2 rounded-lg text-base sm:text-lg font-medium transition-all duration-200 ${
              activeCategory === cat.id
                ? 'bg-black text-white border-black'
                : 'border-gray-400 text-gray-700 hover:border-black'
            }`}
          >
            {cat.name}
          </button>
        ))}
      </div>

      
      <div className="space-y-4 text-left">
        {faqData[activeCategory].map((item, index) => (
          <div key={index} className="rounded-xl bg-gray-100 p-4">
            <button
              onClick={() => toggleAnswer(index)}
              className="w-full flex justify-between items-center text-left text-base sm:text-lg font-medium"
            >
              <span className="pr-4">{item.question}</span>
              {openIndex === index ? (
                <ChevronUp className="w-5 h-5 flex-shrink-0" />
              ) : (
                <ChevronDown className="w-5 h-5 flex-shrink-0" />
              )}
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                openIndex === index ? 'max-h-40 mt-3' : 'max-h-0'
              }`}
            >
              <p className="text-gray-700 text-sm sm:text-base">{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
