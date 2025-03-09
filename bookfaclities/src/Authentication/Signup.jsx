import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import bgimg from '../assets/singup.jpg';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import useAxiosPublic from '../Hooks/useAxiosPublic';
import { AuthContext } from '../Provider/AuthProvider';
import Sociallogin from '../Component/Sociallogin';

const Signup = () => {
  const axiosPublic = useAxiosPublic();
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    createUser(data.email, data.password)
      .then((result) => {
        const loggeduser = result.user;
        console.log('login:', loggeduser);
        updateUserProfile(data.name, data.photo)
          .then(() => {
            const userinfo = {
              name: data.name,
              email: data.email,
            };

            axiosPublic.post('/users', userinfo).then((res) => {
              if (res.data.insertedId) {
                reset();
                Swal.fire({
                  title: 'User created successfully',
                  showClass: {
                    popup: 'animate__animated animate__fadeInUp animate__faster',
                  },
                  hideClass: {
                    popup: 'animate__animated animate__fadeOutDown animate__faster',
                  },
                });
                navigate('/');
              }
            });
          })
          .catch((error) => {
            console.log(error);
          });
      });
  };

  const handleReset = () => {
    reset();
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 bg-white p-8 rounded-lg shadow-lg max-w-4xl w-full">
        
        {/* Left Side - Image */}
        <div className="flex justify-center items-center">
          <img src={bgimg} alt="Signup Illustration" className="w-full  max-w-md h-[300px]" />
        </div>

        {/* Right Side - Form */}
        <div className="w-full">
          <h1 className="text-4xl font-bold text-center text-yellow-700 mb-6">Sign Up</h1>
          
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            {/* Name */}
            <div>
              <label className="block text-gray-700 font-medium mb-1">Name</label>
              <input
                type="text"
                {...register('name', { required: true })}
                placeholder="Your name"
                className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-600"
              />
              {errors.name && <span className="text-red-500 text-sm">This field is required</span>}
            </div>

            {/* Photo URL */}
            <div>
              <label className="block text-gray-700 font-medium mb-1">Photo URL</label>
              <input
                type="url"
                {...register('photo', { required: true })}
                placeholder="Insert image URL"
                className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-600"
              />
              {errors.photo && <span className="text-red-500 text-sm">This field is required</span>}
            </div>

            {/* Email */}
            <div>
              <label className="block text-gray-700 font-medium mb-1">Email</label>
              <input
                type="email"
                {...register('email')}
                placeholder="Your email"
                className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-600"
                required
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-gray-700 font-medium mb-1">Password</label>
              <input
                type="password"
                {...register('password', {
                  required: true,
                  minLength: 6,
                  pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*(),.?":{}|<>]).*$/,
                })}
                placeholder="Your password"
                className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-600"
                required
              />
              {errors.password?.type === 'required' && (
                <span className="text-red-500 text-sm">This field is required</span>
              )}
              {errors.password?.type === 'minLength' && (
                <span className="text-red-500 text-sm">Password must be at least 6 characters</span>
              )}
              {errors.password?.type === 'pattern' && (
                <span className="text-red-500 text-sm">
                  Password must contain at least one uppercase letter, one lowercase, and one special character
                </span>
              )}
            </div>

            {/* Buttons */}
            <div className="flex flex-col gap-3">
            <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-md font-semibold hover:bg-blue-700 transition">
  Sign Up
</button>
<button
  type="button"
  onClick={handleReset}
  className="w-full bg-blue-500 text-white py-2 px-4 rounded-md font-semibold hover:bg-blue-600 transition"
>
  Reset
</button>


            </div>

            {/* Redirect to Login */}
            <p className="text-center text-gray-600">
              Already have an account?{' '}
              <Link className="text-yellow-700 font-bold" to="/login">
                Login here
              </Link>
            </p>

            {/* Social Login */}
            <Sociallogin />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
