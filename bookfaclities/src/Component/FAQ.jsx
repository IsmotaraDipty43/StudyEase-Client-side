import React, { useState } from 'react';
import faqImage from '../assets/faq.jpg';

const FAQ = () => {
  const faqs = [
    {
      question: "How does StudyEase help with college admissions?",
      answer:
        "StudyEase streamlines the college application process by connecting you with top-rated institutions and providing expert guidance.",
    },
    {
      question: "Can I apply to multiple colleges?",
      answer:
        "Yes, our platform lets you apply to as many colleges as you wish, making it easy to explore multiple opportunities.",
    },
    {
      question: "Is there any cost associated with using StudyEase?",
      answer:
        "Basic services are free. Any premium features or additional services will be clearly communicated and priced transparently.",
    },
    {
      question: "How do I get in touch for more information?",
      answer:
        "You can contact our support team via our contact page or email us at support@studyease.com for any queries.",
    },
  ];

  const [openIndices, setOpenIndices] = useState([]);

  const toggleFAQ = (index) => {
    if (openIndices.includes(index)) {
      setOpenIndices(openIndices.filter((i) => i !== index));
    } else {
      setOpenIndices([...openIndices, index]);
    }
  };

  return (
    <section className="py-16 bg-white text-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-green-600 text-center mb-8">
          Frequently Asked Questions
        </h2>
        <div className="flex flex-col md:flex-row items-start gap-20">
          {/* Left Column: FAQ Items */}
          <div className="md:w-1/2 w-full">
            {faqs.map((item, index) => (
              <div key={index} className="border-b border-gray-300 py-4">
                <button
                  className="w-full text-left focus:outline-none"
                  onClick={() => toggleFAQ(index)}
                >
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-medium text-gray-800">
                      {item.question}
                    </span>
                    <span className="text-2xl text-green-600">
                      {openIndices.includes(index) ? '-' : '+'}
                    </span>
                  </div>
                </button>
                {openIndices.includes(index) && (
                  <p className="mt-2 text-gray-600">{item.answer}</p>
                )}
              </div>
            ))}
          </div>
          {/* Right Column: Single Image */}
          <div className="md:w-1/2 w-full mt-8 md:mt-0 flex justify-end">
            <img
              src={faqImage}
              alt="FAQ Illustration"
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
