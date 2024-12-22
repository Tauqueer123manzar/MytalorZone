import React from "react";

const OurStory = () => {
  return (
    <section className="py-16 px-6 md:px-20 lg:px-40 bg-white">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Story</h2>
        <p className="text-gray-600 text-lg md:text-xl">
          We started our journey to bring the best shopping experience to your fingertips. With a vision of providing
          exceptional quality products, we aim to redefine how you shop online.
        </p>
      </div>
      <div className="flex flex-col lg:flex-row items-center gap-10">
        <img
          src="https://wallpapercave.com/wp/wp6488759.jpg"
          alt="Our Story"
          className="w-full lg:w-1/2 rounded-lg shadow-lg"
        />
        <div className="lg:w-1/2 text-gray-600 text-lg">
          <p className="mb-6">
            From a small startup to a global platform, our journey has been fueled by passion and dedication. Our team
            of professionals works relentlessly to ensure that you enjoy the best shopping experience possible.
          </p>
          <p>
            Whether you're looking for the latest trends, exclusive deals, or reliable customer support, we are here to
            make it happen.
          </p>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
