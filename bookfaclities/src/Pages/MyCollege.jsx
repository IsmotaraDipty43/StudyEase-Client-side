import React, { useState, useEffect } from "react";
import Swal from "sweetalert2"; // For sweet alert
import useAuth from "../Hooks/useAuth";
import useAxiosPublic from "../Hooks/useAxiosPublic";

const MyCollege = () => {
  const { user } = useAuth(); // User data from context
  const [admissionData, setAdmissionData] = useState([]);
  const [review, setReview] = useState({ content: "", rating: 0 });
  const axiossecure = useAxiosPublic();
  const [reviews, setReviews] = useState([]); // State for storing reviews

  useEffect(() => {
    // Fetch admission data when the component mounts
    const fetchAdmissionData = async () => {
      try {
        const response = await axiossecure.get(`/admission/${user.email}`);
        setAdmissionData(response.data);
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Failed to fetch admission data",
        });
      }
    };

    if (user?.email) {
      fetchAdmissionData();
    }
  }, [user, axiossecure]);

  // Handle review form input changes
  const handleReviewChange = (e) => {
    const { name, value } = e.target;
    setReview((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Handle rating change
  const handleRatingChange = (e) => {
    setReview({ ...review, rating: Number(e.target.value) });
  };

  // Submit the review to the backend
  const handleReviewSubmit = async (e) => {
    e.preventDefault();
    try {
      const newReview = {
       
        userName: user.name,
        userImage: user.imageUrl,
        reviewContent: review.content,
        rating: review.rating,
        reviewDate: new Date().toLocaleDateString(),
      };
  
      const response = await axiossecure.post("/addReview", newReview);
  
      if (response.status === 200) {
        Swal.fire({
          icon: "success",
          title: "Review Submitted!",
          text: response.data.message,
          confirmButtonText: "OK",
        });
  
        setReviews((prevReviews) => [...prevReviews, response.data.review]);
        setReview({ content: "", rating: 0 }); // Reset review form
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Failed to submit review",
        confirmButtonText: "OK",
      });
    }
  };
  

  return (
    <div className="container mx-auto p-4">
      {admissionData.length === 0 ? (
        <p>No admission data found.</p>
      ) : (
        <div>
          {/* Display the admission data in card format */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {admissionData.map((admission) => (
              <div
                key={admission._id}
                className="bg-white shadow-lg rounded-lg p-4 border border-gray-300"
              >
                <img
                  src={admission.imageUrl}
                  alt={`${admission.candidateName}'s image`}
                  className="w-full h-80 object-cover rounded-t-lg"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold">{admission.candidateName}</h3>
                  <p className="text-sm text-gray-600">{admission.college}</p>
                  <p className="text-sm">{admission.subject}</p>
                  <p className="text-sm">Email: {admission.email}</p>
                  <p className="text-sm">Phone: {admission.phone}</p>
                  <p className="text-sm">Address: {admission.address}</p>
                  <p className="text-sm">Date of Birth: {new Date(admission.dob).toLocaleDateString()}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Review Form */}
          <div className="mt-8">
            <h2 className="text-2xl font-semibold">Add a Review</h2>
            <form onSubmit={handleReviewSubmit} className="mt-4">
              <textarea
                name="content"
                value={review.content}
                onChange={handleReviewChange}
                rows="4"
                className="w-full p-2 border border-gray-300 rounded-md"
                placeholder="Write your review here..."
                required
              />
              <div className="mt-4">
                <label className="block text-sm font-medium text-gray-700">Rating</label>
                <select
                  name="rating"
                  value={review.rating}
                  onChange={handleRatingChange}
                  className="mt-2 p-2 border border-gray-300 rounded-md"
                  required
                >
                  <option value="0">Select Rating</option>
                  <option value="1">1 </option>
                  <option value="2">2 </option>
                  <option value="3">3 </option>
                  <option value="4">4 </option>
                  <option value="5">5 </option>
                </select>
              </div>
              <button
                type="submit"
                className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md"
              >
                Submit Review
              </button>
            </form>
          </div>

        </div>
      )}
    </div>
  );
};

export default MyCollege;
