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
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 animate-fade-in">
      <form onSubmit={handleSubmit} className="flex flex-col items-center justify-center gap-6 w-full max-w-md bg-white shadow-2xl rounded-2xl p-10 backdrop-blur-md animate-slide-up">
        <h2 className="text-2xl font-bold text-amber-700 mb-4 tracking-wide">Log in</h2>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border text-gray-900 border-amber-200 focus:border-amber-400 focus:ring-amber-300 focus:ring-2 p-3 rounded-lg w-full transition-all duration-200 outline-none"
          type="email"
          placeholder="Email"
        />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border text-gray-900 border-amber-200 focus:border-amber-400 focus:ring-amber-300 focus:ring-2 p-3 rounded-lg w-full transition-all duration-200 outline-none"
          type="password"
          placeholder="Password"
        />
        <button
          type="submit"
          className="bg-amber-400 hover:bg-amber-500 text-white font-semibold py-2 px-6 rounded-lg shadow-md transition-all duration-200 w-full"
        >
          Log In
        </button>
      </form>

      <div className="mt-8 flex flex-col items-center gap-2 animate-fade-in delay-200">
        <p className="text-sm text-white">
          Don't have an account?{" "}
          <Link to="/Register" className="text-amber-600 hover:underline cursor-pointer font-medium">Sign up</Link>
        </p>
        <p className="text-sm text-white ">
          Forgot Password?{" "}
          <span className="text-amber-600 hover:underline cursor-pointer font-medium">Reset</span>
        </p>
        <p className="text-sm text-white">
          Need Help?{" "}
          <Link to="/contact" className="text-amber-600 hover:underline cursor-pointer font-medium">Contact Us</Link>
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
