import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import React from "react";

const Blog = () => {
  return (
    <>
      <div className="bg-gray-100 py-12">
        <h2 className="text-center text-4xl font-serif text-gray-800 mb-10">
          Threads of Elegance
        </h2>
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
          {/* Blog Card 1 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              src="https://techbanta.com/wp-content/uploads/2022/07/best-clothing-apps-for-women.jpg"
              alt="Handwoven Fabrics"
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                The Timeless Craft of Handwoven Fabrics: A Journey into Elegance
              </h3>
              <p className="text-sm text-gray-500 mb-4">Dec 07, 2024</p>
              <p className="text-gray-700 mb-6">
                Explore the artistry of handwoven fabrics from India's rich textile tradition. Learn about the intricate weaves, vibrant dyes, and cultural heritage that make each piece unique.
              </p>
              <a
                href="https://www.bunastudio.com/blogs/buna-stories/the-timeless-craft-of-handwoven-fabrics-buna-s-journey-in-west-bengal"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 inline-block text-center"
              >
                Continue Reading
              </a>

            </div>
          </div>

          {/* Blog Card 2 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              src="https://thumbs.dreamstime.com/b/beautiful-young-woman-shopping-clothing-store-shopaholic-chooses-shoes-to-pink-dress-caucasian-shopper-girl-choosing-pink-73485552.jpg"
              alt="Modern Tailoring"
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                Modern Tailoring: Merging Tradition with Innovation
              </h3>
              <p className="text-sm text-gray-500 mb-4">Nov 15, 2024</p>
              <p className="text-gray-700 mb-6">
                Tailoring today combines centuries of tradition with cutting-edge technology. Learn how designers and artisans create bespoke garments while preserving classic craftsmanship.
              </p>
              <a
                href="https://www.mysuittailor.com/en-ca/blogs/grooming-blog/the-evolution-of-mens-tailoring-from-tradition-to-modern-trends#:~:text=Today%E2%80%99s%20tailoring%20effortlessly%20merges%20traditional%20tailoring%20techniques%20with,and%20stretch%20materials%20cater%20to%20comfort%20and%20versatility."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 inline-block text-center"
              >
                Continue Reading
              </a>

            </div>
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default Blog;
