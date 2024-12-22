import React from "react";
import Footer from "../components/Footer";
import banner from "../assets/shoping banner.jpg";
import '../App.css';
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
    image: "https://i.pinimg.com/originals/31/3f/50/313f50e0a66f9be434d7caf0563b60c4.jpg",
    title: "Electric Purple Zari Work Kanjeevaram Silk Saree",
    price: 1999,
    reviews: 31,
    rating: 4.5,
  },
  {
    id: 5,
    image: "https://assets.myntassets.com/h_200,w_200,c_fill,g_auto/h_1440,q_100,w_1080/v1/assets/images/2024/OCTOBER/21/EA9ugsGS_adbb9da530414ff99347350deac5b6de.jpg",
    title: "Electric Purple Zari Work Kanjeevaram Silk Saree",
    price: 1999,
    reviews: 31,
    rating: 4.5,
  },
];

const products2 = [
  {
    id: 1,
    image: "https://4.bp.blogspot.com/-Ku3eG1zKhps/VP1CrMfUVJI/AAAAAAAAA1c/rc_D_iJ5vUs/s1600/1806.jpg",
    title: "Mens Kurta Set with Trousers and Shoes",  
    price: 2199,
    reviews: 29,
    rating: 4.5,
  },
  {
    id: 2,
    image: "https://5.imimg.com/data5/SELLER/Default/2022/8/RR/BG/QP/121727599/1-2-1000x1000.jpeg",
    title: "Stylish yet comfortable, great for outings, dinners, or casual Fridays.",
    price: 679,
    reviews: 15,
    rating: 4,
  },
  {
    id: 3,
    image: "https://i.pinimg.com/originals/6a/db/81/6adb815d31fa464f2cd60c874a7c9587.jpg",
    title: "Stylish yet comfortable, great for outings, dinners, or casual Fridays.",
    price: 699,
    reviews: 5,
    rating: 4,
  },
  {
    id: 4,
    image: "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/1823142/2017/4/27/11493281526215-WROGN-Men-Navy-Blue-Slim-Fit-Checked-Casual-Shirt-5201493281525914-1.jpg",
    title: " Stylish yet comfortable, great for outings, dinners, or casual Fridays.",
    price: 999,
    reviews: 31,
    rating: 4.5,
  },
  {
    id: 5,
    image: "https://i.pinimg.com/originals/e8/58/7e/e8587eb68fb3e53a27c24728b0726102.jpg",
    title: "Stylish yet comfortable, great for outings, dinners, or casual Kurta.",
    price: 1999,
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
         <div className="flex justify-center gap-4">
         <button className="mt-8 px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white text-lg font-semibold rounded-lg shadow-lg transition-all">
          <a href="/sevices">Start Shopping</a>
          </button>
          
          <button className="mt-8 px-6 py-3 gap-2 bg-orange-500 hover:bg-orange-600 text-white text-lg font-semibold rounded-lg shadow-lg transition-all"
          ><a href="/signup">Create Account</a>  
          </button>
         </div>
        </div>
      </div>

  {/* ============================================ Shop Women Section ============================================ */}
      <div className="mt-10 px-4">
        <h1 className="text-4xl font-bold text-center font-[poppins] mb-8">Shop Women</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="group relative product-card overflow-hidden rounded-lg shadow-md bg-white hover:scale-105 hover:shadow-lg transition-transform duration-300"
            >
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-[250px] sm:h-[250px] md:h-[300px] object-cover group-hover:opacity-90 transition-opacity duration-500 img-1"
                style={{ width: "100%", height: "70%", objectFit: "cover" }}
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


      {/* ====================================== Men's Section ================================= */}
      <div className="mt-10 px-4">
        <h1 className="text-4xl font-bold text-center font-[poppins] mb-8">Shop Men</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6">
          {products2.map((product) => (
            <div
              key={product.id}
              className="group relative product-card overflow-hidden rounded-lg shadow-md bg-white hover:scale-105 hover:shadow-lg transition-transform duration-300"
            >
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-[250px] sm:h-[250px] md:h-[300px] object-cover group-hover:opacity-90 transition-opacity duration-500 img-1"
                style={{ width: "100%", height: "70%", objectFit: "cover" }}
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
      <div className="mt-5">
        <Footer />
      </div>
    </>
  );
};

export default Home;
