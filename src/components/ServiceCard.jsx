import React from "react";

const ServiceCard = ({ service }) => {
    return (
        <div className="bg-white rounded-lg shadow-md p-4">
            <img
                src={service.image}
                alt={service.name}
                className="w-full object-cover rounded-t-lg"
                style={{ height: "450px" }}
                data-aos="zoom-in"
                data-aos-delay="50"
                data-aos-easing="ease-in-out"
                data-aos-duration="2000"
                data-aos-offset="200"
                data-aos-once="true"
               
            />
            <div className="mt-4">
                <h3 className="text-lg font-semibold">{service.name}</h3>
                <p className="text-sm text-gray-600">{service.category}</p>
                <p className="text-gray-800 font-bold">₹{service.price}</p>
                <p className="text-yellow-500">Rating: {service.rating} ★</p>
                <button className="mt-4 px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold rounded-lg shadow-lg transition-all">
                    Add to Cart
                </button>
            </div>
        </div>
    );
};

export default ServiceCard;
