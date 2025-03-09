import { NavLink } from "react-router-dom";
import heroImage from "../assets/her.png"; // Replace with your actual image path

const Hero = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-16 bg-white">
      {/* Left Content */}
      <div className="text-center md:text-left md:w-1/2">
      <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
  Start Your Educational Journey with  <span className="bg-gradient-to-r from-green-600 via-teal-500 to-cyan-700 bg-clip-text text-transparent">
    StudyEase
  </span>
</h1>

        <p className="text-lg md:text-xl text-gray-600 mb-8">
          Find the best colleges, programs, and admission opportunities. Your future begins today with us.
        </p>

        {/* CTA Buttons */}
        <div className="flex justify-center md:justify-start space-x-6">
        <NavLink
  to="/colleges"
  className="bg-gradient-to-r from-green-500 to-teal-600 text-white px-8 py-3 rounded-full font-semibold shadow-md hover:from-teal-600 hover:to-green-500 hover:scale-105 transition-all duration-300"
>
  Explore Colleges
</NavLink>
<NavLink
  to="/admission"
  className="border-2 border-green-500 text-green-500 px-8 py-3 rounded-full font-semibold shadow-md hover:bg-green-500 hover:text-white hover:scale-105 transition-all duration-300"
>
  Apply Now
</NavLink>

        </div>
      </div>

      {/* Right Side Image with Border & Gradient Shadow */}
      <div className="md:w-1/2 flex justify-center mt-10 md:mt-0 relative">
        <div className="relative">
          <img
            src={heroImage}
            alt="Education"
            className="w-full  max-w-md md:max-w-lg border-4 border-blue-600 rounded-lg shadow-lg"
          />
          {/* Gradient Shadow Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-30 blur-2xl rounded-lg"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
