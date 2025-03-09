import React from 'react';
import { FaGoogle, FaGithub } from 'react-icons/fa';
import useAuth from '../Hooks/useAuth';
import useAxiosPublic from '../Hooks/useAxiosPublic';
import { useNavigate } from 'react-router-dom';

const Sociallogin = () => {
  const { googleSingin, githubSignin} = useAuth();
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();

  // Handle Google login
  const handleGoogle = () => {
    googleSingin()
      .then((result) => {
        console.log(result.user);
        const userinfo = {
          email: result.user?.email,
          name: result.user.displayName,
          photo: result.user.photoURL,
        };

        // Send user info to the server
        axiosPublic.post('/users', userinfo).then((res) => {
          console.log(res);
          navigate('/');
        });
      })
      .catch((error) => {
        console.error('Google Sign-In Error:', error);
      });
  };

  // Handle GitHub login
  const handleGithub = () => {
    githubSignin()
      .then((result) => {
        console.log(result.user);
        const userinfo = {
          email: result.user?.email,
          name: result.user.displayName,
          photo: result.user.photoURL,
        };

        // Send user info to the server
        axiosPublic.post('/users', userinfo).then((res) => {
          console.log(res);
          navigate('/');
        });
      })
      .catch((error) => {
        console.error('GitHub Sign-In Error:', error);
      });
  };

  return (
    <div className="mt-5">
      <div className="flex items-center justify-center my-4">
        <span className="w-full border-t border-gray-300"></span>
        <span className="px-3 text-gray-500 font-semibold text-sm">OR</span>
        <span className="w-full border-t border-gray-300"></span>
      </div>

      <div className="flex justify-center items-center gap-4">
        {/* Google Login */}
        <button
          onClick={handleGoogle}
          className="flex justify-center items-center gap-3 w-full bg-orange-500 text-white py-2 px-4 rounded-md font-semibold hover:bg-blue-700 transition"
        >
          <FaGoogle className="text-lg" />
          <span>Google Login</span>
        </button>

        {/* GitHub Login */}
        <button
          onClick={handleGithub}
          className="flex justify-center items-center gap-3 w-full bg-gray-800 text-white py-2 px-4 rounded-md font-semibold hover:bg-gray-900 transition"
        >
          <FaGithub className="text-lg" />
          <span>GitHub Login</span>
        </button>
      </div>
    </div>
  );
};

export default Sociallogin;
