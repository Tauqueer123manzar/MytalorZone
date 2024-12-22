import Footer from '../components/Footer';
import React from 'react';

const Signup = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row min-h-screen bg-gray-100">
        {/* Left Section */}
        <div className="flex flex-col justify-center items-center bg-blue-500 text-white w-full md:w-1/2 p-8">
          <h1 className="text-4xl font-bold text-center mb-4">CREATE AN ACCOUNT</h1>
          <p className="text-center text-lg">
            Join us and unlock endless possibilities! Create your account in just a few steps and get started today.
          </p>
          <div className="flex justify-center gap-4 mt-6">
            <a href="#" className="text-white hover:text-gray-300 text-2xl">
              <i className="fab fa-github"></i>
            </a>
            <a href="#" className="text-white hover:text-gray-300 text-2xl">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-white hover:text-gray-300 text-2xl">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="#" className="text-white hover:text-gray-300 text-2xl">
              <i className="fab fa-discord"></i>
            </a>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex flex-col items-center justify-center w-full md:w-1/2 p-6 bg-white">
          <div className="w-full max-w-md">
            <h2 className="text-3xl font-bold text-gray-800 text-center">Create Account</h2>
            <form className="mt-6">
              <div className="mb-4">
                <label htmlFor="fullName" className="block text-sm font-medium text-gray-600">
                  Full Name
                </label>
                <input
                  id="fullName"
                  type="text"
                  className="w-full px-4 py-2 mt-1 text-gray-700 bg-gray-50 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="Enter your full name"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-600">
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  className="w-full px-4 py-2 mt-1 text-gray-700 bg-gray-50 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="Enter your email"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="password" className="block text-sm font-medium text-gray-600">
                  Password
                </label>
                <div className="relative">
                  <input
                    id="password"
                    type="password"
                    className="w-full px-4 py-2 mt-1 text-gray-700 bg-gray-50 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                    placeholder="Enter your password"
                  />
                  <span className="absolute inset-y-0 right-4 flex items-center text-gray-500 cursor-pointer">
                    <i className="fas fa-eye-slash"></i>
                  </span>
                </div>
              </div>
              <button
                type="submit"
                className="w-full px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                Create Account
              </button>
            </form>
            <p className="text-center text-sm text-gray-600 mt-4">
              Already have an account?{' '}
              <a href="/login" className="text-blue-500 hover:underline">
                Log in
              </a>
            </p>
            <div className="flex items-center my-4">
              <hr className="flex-grow border-gray-300" />
              <span className="mx-2 text-sm text-gray-500">or Sign In with</span>
              <hr className="flex-grow border-gray-300" />
            </div>
            <div className="flex gap-4">
              <button className="flex items-center justify-center w-full px-4 py-2 bg-white border border-gray-300 rounded-md hover:bg-gray-50">
                <img
                  src="https://tse3.mm.bing.net/th?id=OIP.uBYsSL7JDekYP3VpxWZvYQHaHa&pid=Api&P=0&h=180"
                  alt="Google"
                  className="w-5 h-5 mr-2"
                />
                Sign up with Google
              </button>
              <button className="flex items-center justify-center w-full px-4 py-2 bg-white border border-gray-300 rounded-md hover:bg-gray-50">
                <i className="fab fa-github text-xl mr-2"></i>
                Sign up with GitHub
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-auto">
        <Footer />
      </div>
    </>
  );
};

export default Signup;

