import React, { useEffect, useState } from "react";
import useAxiosPublic from "../Hooks/useAxiosPublic";

const ReviewsSection = () => {
  const [reviews, setReviews] = useState([]);
  const axiossecure = useAxiosPublic();

  useEffect(() => {

    axiossecure
      .get("/allreview")
      .then((res) => {
        setReviews(res.data);
      })
      .catch((error) => {
        console.error("Error fetching reviews:", error);
      });
  }, [axiossecure]);

  const cardColors = [
    "bg-blue-100", "bg-green-100", "bg-yellow-100", 
    "bg-red-100", "bg-purple-100"
  ];

  return (
    <section className="py-10 px-4">
      <h1 className="text-3xl font-bold text-green-600 text-center mb-6">
        What Our Users Say
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {reviews.length > 0 ? (
          reviews.map((review, index) => (
            <div
              key={review._id}
              className={`p-6 shadow-lg rounded-lg ${cardColors[index % cardColors.length]} `}
            >
              <div className="flex items-center">
                <img
                  src={review.userImage}
                  alt={review.userName}
                  className="w-16 h-16 object-cover rounded-full"
                />
                <div className="ml-4">
                  <h3 className="text-xl font-semibold">{review.userName}</h3>
                  <p className="text-sm text-gray-600">{review.reviewDate}</p>
                </div>
              </div>
              <p className="text-sm text-gray-700 mt-3 break-words">
                {review.reviewContent}
              </p>
            </div>
          ))
        ) : (
          <p className="text-center">No reviews available.</p>
        )}
      </div>
    </section>
  );
};

export default ReviewsSection;
