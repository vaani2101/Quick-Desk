import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

const Register = () => {
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      alert("Please fill in all fields");
      return;
    }

    try {
      setLoading(true);
      const res = await axios.post('http://localhost/book-app/api/signin.php', {
        email,
        password
      }, {
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (res.data.success) {
        alert('Signed in successfully!');
        navigate('/');
      } else {
        alert(res.data.message || 'Signin failed');
      }
    } catch (err) {
      console.error(err);
      alert('Server error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700">
      <form onSubmit={handleSubmit} className="flex flex-col items-center justify-center gap-6 w-full max-w-md bg-white shadow-2xl rounded-2xl p-10 backdrop-blur-md">
        <h2 className="text-2xl font-bold text-amber-700 mb-4 tracking-wide">Sign in</h2>

        <input
          value={email}
          onChange={(e) => setemail(e.target.value)}
          type="email"
          placeholder="Email"
          className="border text-gray-900 border-amber-200 focus:border-amber-400 focus:ring-amber-300 focus:ring-2 p-3 rounded-lg w-full outline-none transition-all"
        />

        <input
          value={password}
          onChange={(e) => setpassword(e.target.value)}
          type="password"
          placeholder="Password"
          className="border text-gray-900 border-amber-200 focus:border-amber-400 focus:ring-amber-300 focus:ring-2 p-3 rounded-lg w-full outline-none transition-all"
        />

        <button
          type="submit"
          disabled={loading}
          className={`bg-amber-400 hover:bg-amber-500 text-white font-semibold py-2 px-6 rounded-lg shadow-md transition-all w-full ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
          {loading ? 'Signing In...' : 'Sign In'}
        </button>
      </form>

      {/* Back to Home Button */}
      <button
        onClick={() => navigate('/')}
        className="mt-4 text-sm text-amber-500 hover:underline"
      >
        ← Go to Home
      </button>

      {/* Footer Links */}
      <div className="mt-6 text-sm text-white text-center">
        <p>
          if you have an account?{" "}
          <Link to="/login" className="text-amber-600 hover:underline font-medium">Log in</Link>
        </p>
        <p>
          Forgot Password?{" "}
          <span className="text-amber-600 hover:underline cursor-pointer font-medium">Reset</span>
        </p>
        <p>
          Need Help?{" "}
          <Link to="/contact" className="text-amber-600 hover:underline font-medium">Contact Us</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
