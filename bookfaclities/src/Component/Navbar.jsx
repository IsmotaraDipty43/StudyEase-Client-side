import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/campuslogo.png";
import useAuth from "../Hooks/useAuth";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { user, logOut } = useAuth();

  // Handle Logout
  const handleLogout = () => {
    logOut();
    setMenuOpen(false); // Close the mobile menu after logging out
  };

  return (
    <section className="flex justify-center items-center">
      <nav className="container mx-auto bg-gradient-to-r from-green-600 via-teal-500 to-cyan-700 text-white py-4 px-6 flex justify-between items-center shadow-md">
        {/* Logo */}
        <NavLink to="/" className="flex items-center justify-center space-x-2">
          <img className="h-10 w-10" src={logo} alt="Campus Logo" />
          <span className="text-2xl font-bold">StudyEase</span>
        </NavLink>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6 justify-center flex-grow">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-yellow-400 text-lg font-semibold"
                : "hover:text-gray-300 text-lg text-white"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/colleges"
            className={({ isActive }) =>
              isActive
                ? "text-yellow-400 text-lg font-semibold"
                : "hover:text-gray-300 text-lg text-white"
            }
          >
            Colleges
          </NavLink>
          <NavLink
            to="/admission"
            className={({ isActive }) =>
              isActive
                ? "text-yellow-400 text-lg font-semibold"
                : "hover:text-gray-300 text-lg text-white"
            }
          >
            Admission
          </NavLink>
          <NavLink
            to="/my-college"
            className={({ isActive }) =>
              isActive
                ? "text-yellow-400 text-lg font-semibold"
                : "hover:text-gray-300 text-lg text-white"
            }
          >
            My College
          </NavLink>
        </div>

        {/* Authentication and User Info (Desktop) */}
        <div className="hidden md:flex space-x-4 items-center">
          {user ? (
            <>
              <div className="flex flex-col items-center space-x-2">
                <Link to="/profile">
                  <span className="text-lg font-semibold">{user.displayName}</span>
                </Link>
              </div>
              <button
                onClick={handleLogout}
                className="bg-white text-green-600 px-4 py-2 rounded-full font-semibold hover:bg-gray-100 transition"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <NavLink
                to="/login"
                className="bg-white text-green-600 px-4 py-2 rounded-full font-semibold hover:bg-gray-100 transition"
              >
                Login
              </NavLink>
              <NavLink
                to="/signup"
                className="bg-white text-green-600 px-4 py-2 rounded-full font-semibold hover:bg-gray-100 transition"
              >
                Sign Up
              </NavLink>
            </>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Mobile Menu (Aligned Right) */}
        <div
          className={`${
            menuOpen ? "block" : "hidden"
          } absolute top-16 right-0 w-3/4 bg-teal-800 p-5 flex flex-col space-y-4 text-center md:hidden shadow-lg rounded-bl-lg`}
        >
          <NavLink
            to="/"
            className="text-white text-lg hover:text-yellow-300"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </NavLink>
          <NavLink
            to="/colleges"
            className="text-white text-lg hover:text-yellow-300"
            onClick={() => setMenuOpen(false)}
          >
            Colleges
          </NavLink>
          <NavLink
            to="/admission"
            className="text-white text-lg hover:text-yellow-300"
            onClick={() => setMenuOpen(false)}
          >
            Admission
          </NavLink>
          <NavLink
            to="/my-college"
            className="text-white text-lg hover:text-yellow-300"
            onClick={() => setMenuOpen(false)}
          >
            My College
          </NavLink>

          {/* Mobile Authentication Buttons */}
          {user ? (
            <div className="text-white text-lg flex flex-col">
              <Link to="/profile">
                <span className="font-semibold">{user.displayName}</span>
              </Link>
              <button
                onClick={handleLogout}
                className="bg-white text-green-600 px-4 py-2 rounded-full font-semibold hover:bg-gray-100 transition mt-2"
              >
                Logout
              </button>
            </div>
          ) : (
            <>
              <NavLink
                to="/login"
                className="bg-white text-green-600 px-4 py-2 rounded-full font-semibold hover:bg-gray-100 transition"
                onClick={() => setMenuOpen(false)}
              >
                Login
              </NavLink>
              <NavLink
                to="/signup"
                className="bg-white text-green-600 px-4 py-2 rounded-full font-semibold hover:bg-gray-100 transition"
                onClick={() => setMenuOpen(false)}
              >
                Sign Up
              </NavLink>
            </>
          )}
        </div>
      </nav>
    </section>
  );
};

export default Navbar;
