import React from 'react';
import { BsInstagram } from 'react-icons/bs';
import { FaFacebook, FaYoutube, FaLinkedin } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
  
const Footer = ({products}) => {
    return (
        <>
            <div className="w-full h-full bg-gray-950">
                <h1 className=" text-4xl font-bold font-initial text-orange-500 p-3">MytalorZone</h1>
                <div className="p-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {/* About Foody */}
                    <div className="p-5">
                        <p className="text-xl font-bold font-initial text-yellow-600">Information</p>
                        <ul className="space-y-2 mt-2">
                            <li><a href="/" className="text-yellow-500 no-underline p-2">Home</a></li>
                            <li><a href="/about" className="text-yellow-500 no-underline p-2">About</a></li>
                            <li><a href="/service" className="text-yellow-500 no-underline p-2">Service</a></li>
                            <li><a href="/contact" className="text-yellow-500 no-underline p-2">Contact</a></li>
                            <li><a href="/blog" className="text-yellow-500 no-underline p-2">Blog</a></li>
                        </ul>
                    </div>

                    {/* Help */}
                    <div className='p-5'>
                        <p className="text-xl font-bold font-initial text-yellow-600">Help Us</p>
                        <ul className="space-y-2 mt-2">
                            <li className="text-yellow-500 no-underline">Feedback</li>
                            <li className="text-yellow-500 no-underline">Cancellation , Refund & Exchange Policy</li>
                            <li className="text-yellow-500 no-underline">Report an Issue</li>
                            <li className="text-yellow-500 no-underline">Privacy & Safety</li>
                            <li className="text-yellow-500 no-underline">Terms & Conditions</li>
                        </ul>
                    </div>

                    {/* For you */}
                    <div className='p-5'>
                        <p className="text-xl font-bold font-initial text-yellow-600">SHOP</p>
                        <ul className="space-y-2 mt-2">
                            <li className="text-yellow-500 no-underline">Saree</li>
                            <li className="text-yellow-500 no-underline">Men's Kurta</li>
                            <li className="text-yellow-500 no-underline">Salwar Suit</li>
                            <li className="text-yellow-500 no-underline">Jeans</li>
                            <li className="text-yellow-500 no-underline">Shirt Collections</li>
                        </ul>
                    </div>

                    {/* Social Links */}
                    <div className='p-5'>
                        <p className="text-xl font-bold font-initial text-yellow-600">Social Links</p>
                        <ul className="flex space-x-4 items-center mt-2">
                            <li><a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><BsInstagram className="text-red-500 text-2xl" /></a></li>
                            <li><a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook className="text-2xl text-blue-400" /></a></li>
                            <li><a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer"><FaXTwitter className="text-blue-500 text-2xl" /></a></li>
                            <li><a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer"><FaYoutube className="text-red-500 text-2xl" /></a></li>
                            <li><a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin className="text-2xl" /></a></li>
                        </ul>
                        <p><img className="mt-3" src="https://b.zmtcdn.com/data/webuikit/9f0c85a5e33adb783fa0aef667075f9e1556003622.png" alt="app" height={50} width={200} /></p>
                        <p><img className="mt-3" src="https://b.zmtcdn.com/data/webuikit/23e930757c3df49840c482a8638bf5c31556001144.png" alt="app" height={50} width={200} /></p>
                    </div>
                </div>

                {/* Footer Bottom */}
                <footer className="text-center mt-10">
                    <hr className="border-0 border-t border-white-500" />
                    <p className="m-7 py-2 text-white">© {new Date().getFullYear()} Created by Md Tauqueer Manzar. All rights reserved.</p>
                </footer>
            </div>
        </>
    );
};

export default Footer;
