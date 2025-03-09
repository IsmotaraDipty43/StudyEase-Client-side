import React from 'react';
import { Link } from 'react-router-dom';
import error from '../assets/error.png';

const ErrorMessage = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      {/* Error Image */}
      <img src={error} alt="Error Icon" className="mr-3" />
      
      {/* Error Message */}
      <span className="text-xl font-bold text-red-500">An error occurred. Please try again later.</span>

      {/* Go Back to Home Button */}
      <Link
        to="/"
        className="mt-6 bg-blue-500 text-white py-2 px-6 rounded-md hover:bg-blue-600"
      >
        Go Back to Home
      </Link>
    </div>
  );
};

export default ErrorMessage;
