import Footer from "../components/Footer";
import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement form submission logic here
    alert("Form submitted!");
  };

  return (
    <>
      <section className="relative">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://wallpaperboat.com/wp-content/uploads/2020/11/10/60057/shopping-33.jpg')",
          }}
        ></div>

        <div className="absolute inset-0 bg-black opacity-50"></div>

        <div className="relative container mx-auto px-6 py-12 text-white">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold">Contact Us</h2>
            <p className="text-lg">We'd love to hear from you</p>
          </div>

          <div className="flex justify-center">
            <div className="w-full md:w-2/3 lg:w-1/2">
              <form
                onSubmit={handleSubmit}
                className="bg-white p-8 rounded-lg shadow-lg space-y-8"
              >
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="w-full">
                    <label htmlFor="name" className="block text-gray-700 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      id="name"
                      placeholder="Your Name"
                      className="w-full p-3 border border-gray-300 rounded-md"
                      required
                    />
                  </div>
                  <div className="w-full">
                    <label htmlFor="email" className="block text-gray-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      id="email"
                      placeholder="Your Email"
                      className="w-full p-3 border border-gray-300 rounded-md"
                      required
                    />
                  </div>
                </div>

                <div className="w-full">
                  <label htmlFor="message" className="block text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    id="message"
                    placeholder="Your Message"
                    rows="6"
                    className="w-full p-3 border border-gray-300 rounded-md"
                    required
                  />
                </div>

                <div className="flex justify-center">
                  <button
                    type="submit"
                    className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition duration-300"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Contact;
