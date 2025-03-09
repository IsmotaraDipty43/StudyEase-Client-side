import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useAxiosPublic from "../Hooks/useAxiosPublic";

const CollegeDetails = () => {
  const { id } = useParams();
  const [college, setCollege] = useState(null);
  const axiossecure = useAxiosPublic();

  useEffect(() => {
    axiossecure
      .get(`/college/${id}`)
      .then((res) => setCollege(res.data))
      .catch((error) => console.error("Error fetching college details:", error));
  }, [axiossecure, id]);

  if (!college) {
    return <p className="text-center text-gray-500">Loading...</p>;
  }

  return (
    <section className="p-10 max-w-5xl mx-auto">
      <div className="rounded-lg shadow-lg p-6">
        <img
          src={college.collegeImage}
          alt={college.collegeName}
          className="w-full h-96 object-cover rounded-lg shadow-md"
        />
        <h1 className="text-3xl font-bold text-gray-800 mt-5">{college.collegeName}</h1>
        <p className="text-gray-600">📍 {college.location}</p>
        <p className="text-gray-700 mt-2">
          <strong>Ranking:</strong> {college.ranking}
        </p>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          {/* Left Section */}
          <div className="">
            <h2 className="text-xl font-semibold text-gray-700 pb-2">🎓 Admission Process</h2>
            <p className="text-gray-600 mt-2">{college.admissionDates}</p>

            <h2 className="text-xl font-semibold text-gray-700  pb-2 mt-4">📚 Departments</h2>
            <ul className="list-disc pl-5 text-gray-600">
              {college.departments.map((dept, index) => (
                <li key={index}>{dept}</li>
              ))}
            </ul>

            <h2 className="text-xl font-semibold text-gray-700 pb-2 mt-4">🔬 Research Work</h2>
            <p className="text-gray-600">{college.researchHistory}</p>
          </div>

          {/* Right Section */}
          <div className="">
            <h2 className="text-xl font-semibold text-gray-700  pb-2">🎉 Events</h2>
            <ul className="list-disc pl-5 text-gray-600">
              {college.events.map((event, index) => (
                <li key={index}>{event}</li>
              ))}
            </ul>

            <h2 className="text-xl font-semibold text-gray-700 pb-2 mt-4">🏆 Sports</h2>
            <ul className="list-disc pl-5 text-gray-600">
              {college.sports.map((sport, index) => (
                <li key={index}>{sport}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-6 flex justify-center">
          <a
            href={college.website}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-300 shadow-md"
          >
            Visit College Website
          </a>
        </div>
      </div>
    </section>
  );
};

export default CollegeDetails;
