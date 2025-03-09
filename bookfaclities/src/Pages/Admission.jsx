import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


import Swal from "sweetalert2"; 
import useAuth from "../Hooks/useAuth";
import useAxiosPublic from "../Hooks/useAxiosPublic";

const collegeNames = [
  "Springfield University", "Greenfield Institute of Technology",
  "Royal Academy of Sciences", "Westwood College", "Riverdale College",
  "Lakeside Arts College", "Mountainview University", "Evergreen University",
  "Central State University", "Eastside Polytechnic", "Northern University",
  "Southern Institute", "Cedar Grove College", "Harborview University",
  "Valley Technical Institute"
];

const Admission = () => {
  const [selectedCollege, setSelectedCollege] = useState(null);
  const { user } = useAuth();
  const navigate = useNavigate();
  const axiossecure = useAxiosPublic()
  const [formData, setFormData] = useState({
    candidateName: "",
    subject: "",
    phone: "",
    address: "",
    dob: "",
    imageUrl: ""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const admissionData = { ...formData, college: selectedCollege, email: user?.email }; // ✅ Include user email

    try {
        axiossecure.post("/application/admissions", admissionData); // ✅ Post to the backend

      // Show SweetAlert success message after submission
      Swal.fire({
        title: "Success!",
        text: "Your admission form has been submitted successfully.",
        icon: "success",
        confirmButtonText: "OK",
      });

      navigate("/my-college");
    } catch (error) {
      console.error("Error submitting form:", error);

      // Show SweetAlert error message if submission fails
      Swal.fire({
        title: "Error!",
        text: "There was an issue with submitting your form. Please try again.",
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  };

  return (
    <section className="p-10 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">Admissions Ongoing for This College</h1>

      {!selectedCollege ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {collegeNames.map((college, index) => (
            <button
              key={index}
              onClick={() => setSelectedCollege(college)}
              className="border p-4 rounded-lg shadow-md hover:bg-blue-100 transition duration-300 text-gray-700 font-semibold text-center"
            >
              {college}
            </button>
          ))}
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="bg-white p-6 shadow-lg rounded-lg">
        <h2 className="text-xl font-bold mb-4 text-gray-700">Admission Form</h2>
      
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input type="text" value={selectedCollege} readOnly className="border p-2 rounded bg-gray-100" />
          <input type="text" name="candidateName" placeholder="Candidate Name" required className="border p-2 rounded" onChange={handleInputChange} />
          <input type="text" name="subject" placeholder="Subject" required className="border p-2 rounded" onChange={handleInputChange} />
          <input type="email" value={user?.email || ""} readOnly className="border p-2 rounded bg-gray-100" />
          <input type="tel" name="phone" placeholder="Phone Number" required className="border p-2 rounded" onChange={handleInputChange} />
          <input type="text" name="address" placeholder="Address" required className="border p-2 rounded" onChange={handleInputChange} />
          <input type="date" name="dob" required className="border p-2 rounded" onChange={handleInputChange} />
          <input type="url" name="imageUrl" placeholder="Image URL" required className="border p-2 rounded" onChange={handleInputChange} />
        </div>
      
        <div className="flex justify-between mt-4">
          <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
            Submit
          </button>
          <button
            type="button"
            onClick={() => {
              setSelectedCollege(null); // Clear the selected college
              setFormData({
                candidateName: "",
                subject: "",
                phone: "",
                address: "",
                dob: "",
                imageUrl: ""
              }); // Reset form fields
            }}
            className="bg-gray-400 text-white px-4 py-2 rounded-lg hover:bg-gray-500"
          >
            Cancel
          </button>
        </div>
      </form>
      
      )}
    </section>
  );
};

export default Admission;
