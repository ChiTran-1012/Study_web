import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login data:", formData);
    // TODO: call API login here
  };

  return (
    <section className="flex items-center justify-center min-h-screen bg-gradient-to-r from-green-100 to-green-300">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold text-green-800 mb-6 text-center">
          Login
        </h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 mt-1 border rounded-lg focus:ring-2 focus:ring-green-400 focus:outline-none"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 mt-1 border rounded-lg focus:ring-2 focus:ring-green-400 focus:outline-none"
              placeholder="Enter your password"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition"
          >
            Login
          </button>
        </form>
        <p className="text-center mt-4 text-sm">
          Don’t have an account?{" "}
          <Link to="/register" className="text-green-600 hover:underline">
            Register
          </Link>
        </p>
      </div>
    </section>
  );
};

export default Login;
