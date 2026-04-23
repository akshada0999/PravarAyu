// src/pages/Register.jsx

import { useState } from "react";
import axios from "axios";
import {
  FaLeaf,
  FaUser,
  FaEnvelope,
  FaPhoneAlt,
  FaLock,
  FaEye,
  FaEyeSlash,
  FaArrowRight,
  FaGoogle,
} from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    agree: false,
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    const { name, email, phone, password, confirmPassword, agree } = formData;

    if (!name || !email || !phone || !password || !confirmPassword) {
      alert("Please fill all fields");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    if (!agree) {
      alert("Please accept Terms & Conditions");
      return;
    }

    try {
      setLoading(true);

    const res = await axios.post(
      "http://localhost:8082/api/users/register",
      {
        fullName: name,
        email,
        phone,
        password,
      }
    );

    alert(res.data || "Registration Successful");
    navigate("/login");
    } catch (error) {
      console.error(error);
      alert(
        error.response?.data || "Registration failed. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#F8F5EF] grid md:grid-cols-2">
      {/* Left Side Form */}
      <div className="flex items-center justify-center px-6 py-14 order-2 md:order-1">
        <div className="w-full max-w-md bg-white rounded-3xl shadow-md p-10">
          {/* Header */}
          <div className="text-center">
            <div className="w-16 h-16 mx-auto rounded-full bg-green-50 flex items-center justify-center text-[#1D5C42] text-2xl">
              <FaLeaf />
            </div>

            <h2 className="text-4xl font-bold text-[#1D5C42] mt-5">
              Create Account
            </h2>

            <p className="text-[#6B4F3A] mt-2">
              Begin your personalized Ayurvedic wellness journey
            </p>
          </div>

          {/* Form */}
          <form
            className="mt-10 space-y-5"
            onSubmit={handleRegister}
          >
            {/* Full Name */}
            <div className="relative">
              <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full border border-gray-200 rounded-2xl pl-12 pr-4 py-4 outline-none focus:ring-2 focus:ring-[#1D5C42]"
              />
            </div>

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

            {/* Phone */}
            <div className="relative">
              <FaPhoneAlt className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
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

            {/* Confirm Password */}
            <div className="relative">
              <FaLock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

              <input
                type={showConfirm ? "text" : "password"}
                name="confirmPassword"
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="w-full border border-gray-200 rounded-2xl pl-12 pr-12 py-4 outline-none focus:ring-2 focus:ring-[#1D5C42]"
              />

              <button
                type="button"
                onClick={() =>
                  setShowConfirm(!showConfirm)
                }
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500"
              >
                {showConfirm ? (
                  <FaEyeSlash />
                ) : (
                  <FaEye />
                )}
              </button>
            </div>

            {/* Terms */}
            <label className="flex items-start gap-3 text-sm text-[#6B4F3A]">
              <input
                type="checkbox"
                name="agree"
                checked={formData.agree}
                onChange={handleChange}
                className="mt-1"
              />

              <span>
                I agree to the{" "}
                <span className="text-[#1D5C42] font-medium">
                  Terms & Conditions
                </span>{" "}
                and Privacy Policy.
              </span>
            </label>

            {/* Register Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#1D5C42] text-white py-4 rounded-2xl font-semibold flex items-center justify-center gap-3 hover:opacity-95 transition disabled:opacity-60"
            >
              {loading ? "Creating..." : "Create Account"}
              {!loading && <FaArrowRight />}
            </button>

            {/* Divider */}
            <div className="relative text-center text-sm text-gray-400">
              <span className="bg-white px-3 relative z-10">
                or sign up with
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

          {/* Login Link */}
          <p className="text-center mt-8 text-[#6B4F3A]">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-[#1D5C42] font-semibold"
            >
              Sign In
            </Link>
          </p>
        </div>
      </div>

      {/* Right Side Image */}
      <div
        className="hidden md:flex bg-cover bg-center relative order-1 md:order-2"
        style={{
          backgroundImage:
            "url('https://plus.unsplash.com/premium_photo-1693266635481-37de41003239?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aGVyYnN8ZW58MHwxfDB8fHww')",
        }}
      >
        <div className="absolute inset-0 bg-black/35"></div>

        <div className="relative z-10 text-white p-14 flex flex-col justify-end">
          <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur flex items-center justify-center text-2xl">
            <FaLeaf />
          </div>

          <p className="uppercase tracking-[0.3em] text-sm mt-8">
            Join Pravar Ayu
          </p>

          <h1 className="text-5xl font-bold leading-tight mt-4">
            Wellness Begins
            <br />
            With One Step
          </h1>

          <p className="mt-6 text-lg text-white/90 max-w-md leading-8">
            Create your account to access consultations,
            healing plans, bookings, and premium Ayurvedic
            care.
          </p>
        </div>
      </div>
    </div>
  );
}