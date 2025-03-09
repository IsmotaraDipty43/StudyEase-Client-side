import React from 'react';
import { FaUniversity, FaCheckCircle, FaChalkboardTeacher } from 'react-icons/fa';

const WhyChooseUs = () => {
  return (
    <section className="py-16 bg-gray-100 text-gray-900">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-green-600 mb-6">Why Choose StudyEase?</h2>
        <p className="text-lg text-gray-700 mb-10 max-w-3xl mx-auto">
          We provide a seamless college application experience with expert guidance and top-rated institutions.
        </p>
        
        <div className="grid md:grid-cols-3 gap-6 px-10">
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all">
            <div className="flex justify-center mb-4">
              <FaUniversity className="text-green-600 text-4xl" />
            </div>
            <h3 className="text-xl font-semibold text-green-600 mb-3">Top Colleges</h3>
            <p>Explore top-rated colleges that match your preferences and career goals.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all">
            <div className="flex justify-center mb-4">
              <FaCheckCircle className="text-green-600 text-4xl" />
            </div>
            <h3 className="text-xl font-semibold text-green-600 mb-3">Hassle-Free Admission</h3>
            <p>Apply to colleges with just a few clicks, making the admission process effortless.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all">
            <div className="flex justify-center mb-4">
              <FaChalkboardTeacher className="text-green-600 text-4xl" />
            </div>
            <h3 className="text-xl font-semibold text-green-600 mb-3">Expert Guidance</h3>
            <p>Get personalized counseling and career advice from experts.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
