import React from 'react';
import { Link } from 'react-router-dom'; 

const Collagecard = ({ college }) => {
    return (
        <div className="bg-white shadow-xl rounded-lg overflow-hidden w-full gap-10 p-5">
            <img
                src={college.collegeImage}
                alt={college.collegeName}
                className="w-full h-48 object-cover rounded-md"
            />
            <div className="mt-4">
                <h2 className="text-2xl font-semibold text-gray-800">{college.collegeName}</h2>
                <p className="text-sm text-gray-600 mt-1">Admission Dates: {college.admissionDates}</p>
            </div>

            <div className="mt-3">
                <h3 className="font-semibold text-gray-700">Events:</h3>
                <ul className="text-sm text-gray-700 list-disc pl-5">
                    {college.events.map((event, index) => (
                        <li key={index}>{event}</li>
                    ))}
                </ul>
            </div>

            <p className="text-sm text-gray-700 mt-2">
                <span className="font-semibold">Research:</span> {college.researchHistory}
            </p>

            <div className="mt-3">
                <h3 className="font-semibold text-gray-700">Sports:</h3>
                <ul className="text-sm text-gray-700 list-disc pl-5">
                    {college.sports.map((sport, index) => (
                        <li key={index}>{sport}</li>
                    ))}
                </ul>
            </div>

            <div className="mt-4">
                <Link
                    to={`/college/${college._id}`} 
                    className="bg-orange-600 text-white px-4 py-2 rounded-lg  transition duration-300"
                >
                    View Details
                </Link>
            </div>
        </div>
    );
};

export default Collagecard;
