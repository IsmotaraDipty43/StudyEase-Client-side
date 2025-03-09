import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import loginimg from '../assets/login.jpg';
import Sociallogin from '../Component/Sociallogin';
import { AuthContext } from '../Provider/AuthProvider';

const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const { signIn, resetPassword } = useContext(AuthContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        signIn(email, password)
            .then((result) => {
                Swal.fire({
                    title: 'Login Successful!',
                    icon: 'success',
                    showClass: { popup: 'animate__animated animate__fadeInDown' },
                    hideClass: { popup: 'animate__animated animate__fadeOutUp' },
                });
                navigate(from, { replace: true });
            })
            .catch((error) => {
                Swal.fire({
                    title: 'Login Failed!',
                    text: error.message || 'Invalid credentials. Please try again.',
                    icon: 'error',
                    showClass: { popup: 'animate__animated animate__fadeInDown' },
                    hideClass: { popup: 'animate__animated animate__fadeOutUp' },
                });
            })
            .finally(() => setLoading(false));
    };

    const handlePasswordReset = () => {
        if (!email) {
            Swal.fire({
                title: 'Error',
                text: 'Please enter your email address',
                icon: 'error',
            });
            return;
        }

        setLoading(true);

        resetPassword(email)
            .then(() => {
                Swal.fire({
                    title: 'Password Reset Email Sent!',
                    text: 'Please check your inbox for the password reset instructions.',
                    icon: 'success',
                });
            })
            .catch((error) => {
                Swal.fire({
                    title: 'Email missing',
                    text: error.message || 'Please enter your Email',
                    icon: 'wearning',
                });
            })
            .finally(() => setLoading(false));
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100 p-5">
            <div className="flex flex-col md:flex-row bg-white shadow-lg rounded-lg overflow-hidden w-full max-w-5xl">
                {/* Image Section */}
                <div className="md:w-1/2 p-5 flex items-center justify-center">
                    <img src={loginimg} alt="Login" className="rounded-lg w-full max-w-md" />
                </div>

                {/* Login Section */}
                <div className="md:w-1/2 p-8">
                    <h1 className="text-3xl font-bold text-center text-black mb-6">Login Now</h1>

                    <form onSubmit={handleSubmit} className="space-y-4">
                        {/* Email Field */}
                        <div>
                            <label className="block text-blue-700 font-semibold">Email</label>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Enter your email"
                                className="w-full px-4 py-2 border border-blue-500 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                required
                            />
                        </div>

                        {/* Password Field */}
                        <div>
                            <label className="block text-blue-700 font-semibold">Password</label>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Enter your password"
                                className="w-full px-4 py-2 border border-blue-500 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                required
                            />
                        </div>

                        {/* Social Login */}
                        <Sociallogin />

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="w-full bg-blue-600 text-white py-2 rounded-md font-semibold hover:bg-blue-700 transition"
                            disabled={loading}
                        >
                            {loading ? 'Signing In...' : 'Sign In'}
                        </button>
                    </form>

                    {/* Forgot Password Section */}
                    <div className="text-right mt-2">
                        <button
                            onClick={handlePasswordReset}
                            className="text-blue-600 hover:underline text-sm"
                            disabled={loading}
                        >
                            {loading ? 'Sending Reset Email...' : 'Forgot password?'}
                        </button>
                    </div>

                    {/* Redirect to Registration */}
                    <p className="text-center mt-4 text-gray-700 text-sm">
                        New here?{' '}
                        <Link className="text-blue-700 font-bold hover:underline" to="/signup">
                            Create a New Account
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;
