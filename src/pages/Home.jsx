import React from "react";
import Footer from "../components/Footer";
import banner from "../assets/shoping banner.jpg";

const products = [
  {
    id: 1,
    image: "https://i.pinimg.com/originals/12/c7/ab/12c7ab160e76949a16afc4f40854dd35.jpg",
    title: "Natasha Luthra in Baby Pink Feather Soft Saree",
    price: 3199,
    reviews: 29,
    rating: 4.5,
  },
  {
    id: 2,
    image: "https://i.pinimg.com/originals/c9/9c/d8/c99cd8dc199ecb3acaed4859ed04fc76.jpg",
    title: "Venetian Red Golden Zari Kanjeevaram Silk Saree",
    price: 3279,
    reviews: 15,
    rating: 4,
  },
  {
    id: 3,
    image: "http://www.weddingsonline.in/blog/wp-content/uploads/2013/09/w51.jpg",
    title: "Fusion Pink Feather Soft Saree with Blouse Piece",
    price: 2699,
    reviews: 5,
    rating: 4,
  },
  {
    id: 4,
    image: "https://assets.myntassets.com/h_200,w_200,c_fill,g_auto/h_1440,q_100,w_1080/v1/assets/images/2024/OCTOBER/21/EA9ugsGS_adbb9da530414ff99347350deac5b6de.jpg",
    title: "Electric Purple Zari Work Kanjeevaram Silk Saree",
    price: 1999,
    reviews: 31,
    rating: 4.5,
  },
  {
    id: 5,
    image: "https://i.pinimg.com/736x/ee/7d/cf/ee7dcfa3705d176360537af0b588b043.jpg",
    title: "Electric Purple Zari Work Kanjeevaram Silk Saree",
    price: 3499,
    reviews: 31,
    rating: 4.5,
  },
];

const Home = () => {
  return (
    <>
      {/* Banner Section */}
      <div
        className="relative bg-cover bg-center h-screen flex items-center justify-center"
        style={{ backgroundImage: `url(${banner})` }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative text-center text-white">
          <h1 className="text-5xl font-bold drop-shadow-lg">Welcome to MytailorZone</h1>
          <p className="text-lg mt-4 max-w-xl mx-auto drop-shadow-md">
            Explore the best shopping experience tailored just for you.
          </p>
          <button className="mt-8 px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white text-lg font-semibold rounded-lg shadow-lg transition-all">
            Start Shopping
          </button>
        </div>
      </div>

      {/* Shop Women Section */}
      <div className="mt-10 px-4">
        <h1 className="text-4xl font-bold text-center font-[poppins] mb-8">Shop Women</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="group relative overflow-hidden rounded-lg shadow-md bg-white hover:scale-105 hover:shadow-lg transition-transform duration-300"
            >
              <img
                src={product.image}
                alt={product.title}
                className="w-60 h-80 object-cover group-hover:opacity-90 transition-opacity duration-500"
              />
              <div className="absolute top-2 right-2 bg-black text-white text-sm px-2 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Quick View
              </div>
              <div className="p-4">
                <h3 className="text-sm font-medium text-gray-700">{product.title}</h3>
                <p className="text-lg font-bold text-gray-900">Rs. {product.price}</p>
                <div className="flex items-center space-x-1 text-yellow-500 mt-2">
                  {Array(Math.floor(product.rating))
                    .fill(0)
                    .map((_, i) => (
                      <span key={i}>⭐</span>
                    ))}
                  {product.rating % 1 !== 0 && <span>⭐</span>}
                </div>
                <p className="text-sm text-gray-500 mt-1">{product.reviews} reviews</p>
                <button className="mt-4 px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold rounded-lg shadow-lg transition-all">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer Section */}
      <div className="mt-5">
      <Footer />
      </div>
    </>
  );
};

export default Home;
