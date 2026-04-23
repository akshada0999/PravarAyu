// src/pages/Login.jsx

import { useState } from "react";
import axios from "axios";
import {
  FaLeaf,
  FaEnvelope,
  FaLock,
  FaEye,
  FaEyeSlash,
  FaGoogle,
  FaArrowRight,
} from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    remember: false,
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      alert("Please enter email and password");
      return;
    }

    try {
      setLoading(true);

      const res = await axios.post(
        "http://localhost:8082/api/users/login",
        {
          email: formData.email,
          password: formData.password,
        }
      );

      alert(res.data || "Login Successful");

      // optional token save
      if (formData.remember) {
        localStorage.setItem("userEmail", formData.email);
      } else {
        sessionStorage.setItem("userEmail", formData.email);
      }

      navigate("/");
    } catch (error) {
      console.error(error);

      alert(
        error.response?.data ||
          "Login failed. Please check credentials."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#F8F5EF] grid md:grid-cols-2">
      {/* Left Side Image Section */}
      <div
        className="hidden md:flex bg-cover bg-center relative"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1600&auto=format&fit=crop')",
        }}
      >
        <div className="absolute inset-0 bg-black/35"></div>

        <div className="relative z-10 text-white p-14 flex flex-col justify-end">
          <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur flex items-center justify-center text-2xl">
            <FaLeaf />
          </div>

          <p className="uppercase tracking-[0.3em] text-sm mt-8">
            Welcome Back
          </p>

          <h1 className="text-5xl font-bold leading-tight mt-4">
            Return to Your
            <br />
            Healing Journey
          </h1>

          <p className="mt-6 text-lg text-white/90 max-w-md leading-8">
            Access consultations, wellness plans, bookings, and Ayurvedic care
            personalized for you.
          </p>
        </div>
      </div>

      {/* Right Side Form */}
      <div className="flex items-center justify-center px-6 py-14">
        <div className="w-full max-w-md bg-white rounded-3xl shadow-md p-10">
          {/* Logo */}
          <div className="text-center">
            <div className="w-16 h-16 mx-auto rounded-full bg-green-50 flex items-center justify-center text-[#1D5C42] text-2xl">
              <FaLeaf />
            </div>

            <h2 className="text-4xl font-bold text-[#1D5C42] mt-5">
              Pravar Ayu
            </h2>

            <p className="text-[#6B4F3A] mt-2">
              Sign in to continue your wellness experience
            </p>
          </div>

          {/* Form */}
          <form
            className="mt-10 space-y-5"
            onSubmit={handleLogin}
          >
            {/* Email */}
            <div className="relative">
              <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                className="w-full border border-gray-200 rounded-2xl pl-12 pr-4 py-4 outline-none focus:ring-2 focus:ring-[#1D5C42]"
              />
            </div>

            {/* Password */}
            <div className="relative">
              <FaLock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                className="w-full border border-gray-200 rounded-2xl pl-12 pr-12 py-4 outline-none focus:ring-2 focus:ring-[#1D5C42]"
              />

              <button
                type="button"
                onClick={() =>
                  setShowPassword(!showPassword)
                }
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500"
              >
                {showPassword ? (
                  <FaEyeSlash />
                ) : (
                  <FaEye />
                )}
              </button>
            </div>

            {/* Remember + Forgot */}
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 text-[#6B4F3A]">
                <input
                  type="checkbox"
                  name="remember"
                  checked={formData.remember}
                  onChange={handleChange}
                />
                Remember me
              </label>

              <Link
                to="/forgot-password"
                className="text-[#1D5C42] font-medium"
              >
                Forgot Password?
              </Link>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#1D5C42] text-white py-4 rounded-2xl font-semibold flex items-center justify-center gap-3 hover:opacity-95 transition disabled:opacity-60"
            >
              {loading ? "Signing In..." : "Sign In"}
              {!loading && <FaArrowRight />}
            </button>

            {/* Divider */}
            <div className="relative text-center text-sm text-gray-400">
              <span className="bg-white px-3 relative z-10">
                or continue with
              </span>

              <div className="absolute left-0 top-1/2 w-full border-t"></div>
            </div>

            {/* Google */}
            <button
              type="button"
              className="w-full border border-gray-200 py-4 rounded-2xl flex items-center justify-center gap-3 hover:bg-gray-50 transition"
            >
              <FaGoogle />
              Continue with Google
            </button>
          </form>

          {/* Register */}
          <p className="text-center mt-8 text-[#6B4F3A]">
            Don’t have an account?{" "}
            <Link
              to="/register"
              className="text-[#1D5C42] font-semibold"
            >
              Create Account
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}