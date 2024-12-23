import Footer from '../components/Footer';
import { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form submitted', email, password);
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/v1/user/login`,
        { email, password, role: 'User' }
      );
      console.log(res.data.message);
      toast.success(res.data.message);
      setEmail('');
      setPassword('');
      navigate('/');
      localStorage.setItem('token', res.data.token);
      localStorage.setItem('role', res.data.role);
    } catch (error) {
      toast.error(error.response?.data?.message || 'Something went wrong!');
    }
  };


  return (
    <>
      <div className="flex flex-col md:flex-row h-screen bg-gray-100">
        <div className="w-full md:w-1/2">
          <div
            className="h-48 md:h-full bg-cover bg-center"
            style={{
              backgroundImage: `url('https://peaseandcurren.com/wp-content/uploads/2020/03/Retail-and-online-shopping.jpg')`,
            }}
          ></div>
        </div>

        <div className="flex items-center justify-center w-full h-full md:w-1/2 p-6 bg-white">
          <div className="w-full max-w-md">
            <h2 className="text-3xl font-bold text-center text-gray-800">Welcome Back</h2>
            <p className="text-center text-gray-600">Please login to your account</p>
            <form className="mt-6" onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-600">
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full px-4 py-2 mt-1 text-gray-700 bg-gray-50 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="Enter your email"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="password" className="block text-sm font-medium text-gray-600">
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full px-4 py-2 mt-1 text-gray-700 bg-gray-50 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="Enter your password"
                />
              </div>
              <div className="mb-4">
                <button
                  type="submit"
                  className="w-full px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-1"
                >
                  Login
                </button>
              </div>
            </form>
            <p className="text-sm text-center text-gray-600">
              Don't have an account?{' '}
              <a href="/signup" className="text-blue-500 hover:underline">
                Sign up
              </a>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
