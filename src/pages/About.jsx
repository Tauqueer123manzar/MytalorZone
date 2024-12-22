import OurStory from "../components/OurStory";
import Testimonials from "../components/Testimonial";
import Footer from "../components/Footer";

const About = () => {
  return (
    <>
    <div className="bg-gray-50 text-gray-800">
      <header className="w-full bg-gradient-to-r from-blue-500 to-teal-500 text-white py-16 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">About Us</h1>
        <p className="text-lg md:text-xl">Discover who we are and what we stand for.</p>
      </header>
      <OurStory />
      <Testimonials />
      <Footer/>
    </div>
    </>
  );
};

export default About;
