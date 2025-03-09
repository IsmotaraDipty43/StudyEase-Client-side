import { NavLink } from "react-router-dom";
import logo from "../assets/campuslogo.png";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-green-600 via-teal-500 to-cyan-700 text-white py-10 px-6">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        {/* Logo & About */}
        <div>
          <NavLink to="/" className="flex items-center justify-center md:justify-start space-x-2">
            <img className="h-12 w-12" src={logo} alt="StudyEase Logo" />
            <span className="text-2xl font-bold">StudyEase</span>
          </NavLink>
          <p className="mt-3 text-sm">
            Your gateway to the best colleges, admissions, and academic resources.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li><NavLink to="/" className="hover:text-yellow-300">Home</NavLink></li>
            <li><NavLink to="/colleges" className="hover:text-yellow-300">Colleges</NavLink></li>
            <li><NavLink to="/admission" className="hover:text-yellow-300">Admission</NavLink></li>
            <li><NavLink to="/my-college" className="hover:text-yellow-300">My College</NavLink></li>
          </ul>
        </div>

        {/* Contact & Social Media */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Contact Us</h3>
          <p>Email: support@studyease.com</p>
          <p>Phone: +123 456 7890</p>
          <div className="flex justify-center md:justify-start space-x-4 mt-3">
            <a href="#" className="text-xl hover:text-yellow-300"><FaFacebook /></a>
            <a href="#" className="text-xl hover:text-yellow-300"><FaTwitter /></a>
            <a href="#" className="text-xl hover:text-yellow-300"><FaInstagram /></a>
            <a href="#" className="text-xl hover:text-yellow-300"><FaLinkedin /></a>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="text-center mt-8 text-sm border-t border-white/30 pt-4">
        &copy; {new Date().getFullYear()} StudyEase. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
