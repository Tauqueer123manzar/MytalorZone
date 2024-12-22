const testimonials = [
  {
    name: "John Doe",
    image: "https://tse1.mm.bing.net/th?id=OIP.tR2Umw6O108_1cjdtEOb8QHaHT&pid=Api&P=0&h=180",
    feedback:
      "Shopping here has been an absolute pleasure! The products are top-notch, and the customer service is excellent. Highly recommended!",
  },
  {
    name: "Jane Smith",
    image: "https://tse1.mm.bing.net/th?id=OIP.fAf2S9tnbWpEpmp18BDdHwHaIR&pid=Api&P=0&h=180",
    feedback:
      "I am amazed by the variety and quality of products available. The user experience is seamless, and I keep coming back for more!",
  },
  {
    name: "Alice Johnson",
    image: "https://tse4.mm.bing.net/th?id=OIP.I3BoQku-q4Jri8xgoD6CPAAAAA&pid=Api&P=0&h=180",
    feedback:
      "Fantastic shopping experience! Fast delivery, great products, and the website is so easy to use. Love it!",
  },
];

const Testimonial = () => {
  return (
    <section className="py-16 px-6 md:px-20 lg:px-40 bg-gray-100">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">What Our Customers Say</h2>
        <p className="text-gray-600 text-lg md:text-xl">
          Hear from our customers who have experienced the joy of shopping with us.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center"
          >
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="w-20 h-20 rounded-full mb-4"
            />
            <h3 className="text-lg font-semibold text-gray-800">{testimonial.name}</h3>
            <p className="text-gray-600 mt-4">{testimonial.feedback}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonial;
