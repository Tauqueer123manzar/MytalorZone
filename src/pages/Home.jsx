import React from "react";
import Footer from "../components/Footer";
import banner from "../assets/shoping banner.jpg";

const Home = () => {
  return (
    <>
      {/* Background Section */}
      <div
        className="relative bg-cover bg-center h-screen flex items-center justify-center"
        style={{ backgroundImage: `url(${banner})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-50"></div>

        {/* Content */}
        <div className="relative text-center text-white">
          <h1 className="text-5xl font-bold drop-shadow-lg">Welcome to MytalorZone</h1>
          <p className="text-lg mt-4 max-w-xl mx-auto drop-shadow-md">
            Explore the best shopping experience tailored just for you.
          </p>
          <button className="mt-8 px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white text-lg font-semibold rounded-lg shadow-lg transition-all">
            Start Shopping
          </button>
        </div>
      </div>

      {/* Footer Section */}
      <div>
        <Footer />
      </div>
    </>
  );
};

export default Home;
