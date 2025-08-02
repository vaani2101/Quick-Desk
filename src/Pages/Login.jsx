import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

const Login = () => { 
   const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      alert('Please enter email and password');
      return;
    }

    try {
      const res = await axios.post('http://localhost/book-app/api/login.php', {
        email,
        password,
      });

      if (res.data.success) {
        alert('Login successful!');
        navigate('/'); 
      } else {
        alert(res.data.message || 'Invalid credentials');
      }

    } catch (err) {
      console.error(err);
      alert('Something went wrong. Try again later.');
    }

    setEmail('');
    setPassword('');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 animate-fade-in">
      <form onSubmit={handleSubmit} className="flex flex-col items-center justify-center w-full max-w-md gap-6 p-10 bg-white shadow-2xl rounded-2xl backdrop-blur-md animate-slide-up">
        <h2 className="mb-4 text-2xl font-bold tracking-wide text-amber-700">Log in</h2>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-3 text-gray-900 transition-all duration-200 border rounded-lg outline-none border-amber-200 focus:border-amber-400 focus:ring-amber-300 focus:ring-2"
          type="email"
          placeholder="Email"
        />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-3 text-gray-900 transition-all duration-200 border rounded-lg outline-none border-amber-200 focus:border-amber-400 focus:ring-amber-300 focus:ring-2"
          type="password"
          placeholder="Password"
        />
        <button
          type="submit"
          className="w-full px-6 py-2 font-semibold text-white transition-all duration-200 rounded-lg shadow-md bg-amber-400 hover:bg-amber-500"
        >
          Log In
        </button>
      </form>

      <div className="flex flex-col items-center gap-2 mt-8 delay-200 animate-fade-in">
        <p className="text-sm text-white">
          Don't have an account?{" "}
          <Link to="/Register" className="font-medium cursor-pointer text-amber-600 hover:underline">Sign up</Link>
        </p>
        <p className="text-sm text-white ">
          Forgot Password?{" "}
          <span className="font-medium cursor-pointer text-amber-600 hover:underline">Reset</span>
        </p>
        <p className="text-sm text-white">
          Need Help?{" "}
          <Link to="/contact" className="font-medium cursor-pointer text-amber-600 hover:underline">Contact Us</Link>
        </p>
      </div>

      <style>
        {`
          .animate-fade-in {
            animation: fadeIn 1s ease;
          }
          .animate-slide-up {
            animation: slideUp 0.8s cubic-bezier(.4,0,.2,1);
          }
          @keyframes fadeIn {
            from { opacity: 0 }
            to { opacity: 1 }
          }
          @keyframes slideUp {
            from { transform: translateY(40px); opacity: 0 }
            to { transform: translateY(0); opacity: 1 }
          }
        `}
      </style>
    </div>
  );
};

export default Login;