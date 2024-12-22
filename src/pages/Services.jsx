import { useState } from "react";
import services from "../../ServiceData";
import ServiceCard from "../components/ServiceCard";
import Footer from "../components/Footer";

const Services = () => {
  const [category, setCategory] = useState("All");
  const [maxPrice, setMaxPrice] = useState(1000);
  const [rating, setRating] = useState(0);

  const filteredServices = services.filter(
    (service) =>
      (category === "All" || service.category === category) &&
      service.price <= maxPrice &&
      service.rating >= rating
  );

  return (
    <>
      <div className="bg-gray-50 text-gray-800">
        <header className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-16 text-center">
          <h1 className="text-4xl font-bold mb-4">Our Services</h1>
          <p className="text-lg">Find the best services tailored for you!</p>
        </header>

        <div className="py-8 px-6 md:px-20 bg-white">
          <h2 className="text-2xl font-bold mb-6">Filter Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label className="block font-semibold mb-2">Category</label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full p-2 border rounded-lg"
              >
                <option value="All">All</option>
                <option value="Shirts">Shirts</option>
                <option value="T-Shirts">T-Shirts</option>
                <option value="Sarees">Sarees</option>
                <option value="Lehengas">Lehengas</option>
                <option value="Kurtas">Kurtas</option>
              </select>
            </div>

            <div>
              <label className="block font-semibold mb-2">Max Price (Rs)</label>
              <input
                type="range"
                min="50"
                max="1000"
                value={maxPrice}
                onChange={(e) => setMaxPrice(Number(e.target.value))}
                className="w-full"
              />
              <p className="mt-2 text-gray-600">₹{maxPrice}</p>
            </div>

            <div>
              <label className="block font-semibold mb-2">Minimum Rating</label>
              <input
                type="number"
                min="0"
                max="5"
                step="0.1"
                value={rating}
                onChange={(e) => setRating(Number(e.target.value))}
                className="w-full p-2 border rounded-lg"
              />
            </div>
          </div>
        </div>

        <div className="py-8 px-6 md:px-20">
          <h2 className="text-2xl font-bold mb-6">Available Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredServices.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
          {filteredServices.length === 0 && (
            <p className="text-center text-gray-600 mt-6">
              No services match your criteria.
            </p>
          )}
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default Services;
