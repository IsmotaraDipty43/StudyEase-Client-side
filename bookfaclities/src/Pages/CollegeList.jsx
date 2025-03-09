import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useAxiosPublic from "../Hooks/useAxiosPublic";

const CollegeList = () => {
  const [colleges, setColleges] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const axiossecure = useAxiosPublic();

  useEffect(() => {
    axiossecure
      .get("/allcollage") 
      .then((res) => setColleges(res.data))
      .catch((error) => console.error("Error fetching colleges:", error));
  }, [axiossecure]);


  const filteredColleges = colleges.filter((college) =>
    college.collegeName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section className="p-10 max-w-6xl mx-auto">
      {/* Search Bar */}
      <div className="mb-6 flex justify-center">
        <input
          type="text"
          placeholder="Search by College Name..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full md:w-1/2 px-4 py-2 border rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* College List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredColleges.map((college) => (
          <div
            key={college._id}
            className="rounded-lg shadow-lg p-5 hover:shadow-xl transition duration-300"
          >
            <img
              src={college.collegeImage}
              alt={college.collegeName}
              className="w-full h-48 object-cover rounded-lg"
            />
            <h2 className="text-2xl font-bold text-gray-800 mt-4">{college.collegeName}</h2>
            <p className="text-gray-600">📍 {college.location}</p>
            <p className="text-gray-700">
              <strong>Ranking:</strong> {college.ranking}
            </p>
            <p className="text-gray-700">
              <strong>Admission:</strong> {college.admissionDates}
            </p>
            <p className="text-gray-700">
              <strong>Research Count:</strong> {college.researchHistory.split(" ").length}+
            </p>

            {/* Details Button */}
            <div className="mt-4">
              <Link
                to={`/college/${college._id}`}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CollegeList;
