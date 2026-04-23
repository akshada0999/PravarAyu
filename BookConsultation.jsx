import { useState, useEffect } from "react";
import axios from "axios";
import {
  FaLeaf,
  FaUserMd,
  FaCalendarAlt,
  FaClock,
  FaPhoneAlt,
  FaEnvelope,
  FaUser,
  FaNotesMedical,
  FaArrowRight,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function BookConsultation() {
  const navigate = useNavigate();

  const [doctors, setDoctors] = useState([]);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    doctor: "",
    date: "",
    time: "",
    concern: "",
  });

  useEffect(() => {
    fetchDoctors();
  }, []);

  const fetchDoctors = async () => {
    try {
      const res = await axios.get(
        "http://localhost:8082/api/doctors"
      );
      setDoctors(res.data);
    } catch (error) {
      console.error("Error loading doctors:", error);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post(
        "http://localhost:8082/api/consultations",
        formData
      );

      alert("Booking Confirmed");

      navigate("/confirm");
    } catch (error) {
      console.error("Booking failed:", error);
      alert("Booking Failed");
    }
  };

  return (
    <div className="bg-[#F8F5EF] min-h-screen text-[#6B4F3A]">
      {/* Hero */}
      <section
        className="relative h-[55vh] bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://plus.unsplash.com/premium_photo-1746888841309-04733cf041fe?w=600&auto=format&fit=crop&q=60')",
        }}
      >
        <div className="absolute inset-0 bg-black/35"></div>

        <div className="relative z-10 text-center text-white px-6">
          <p className="uppercase tracking-[0.3em] text-sm">
            Begin Your Wellness Journey
          </p>

          <h1 className="text-5xl md:text-6xl font-bold mt-4">
            Book Consultation
          </h1>

          <p className="mt-4 text-lg max-w-2xl mx-auto">
            Connect with our Ayurvedic experts for personalized healing,
            wellness guidance, and holistic treatment.
          </p>
        </div>
      </section>

      {/* Main */}
      <section className="max-w-7xl mx-auto px-8 py-20 grid md:grid-cols-2 gap-12">
        {/* Left */}
        <div>
          <p className="uppercase tracking-[0.3em] text-sm">
            Why Book With Us
          </p>

          <h2 className="text-5xl font-bold text-[#1D5C42] mt-4">
            Personalized Care
          </h2>

          <p className="mt-6 text-lg leading-8">
            Our practitioners assess your unique constitution and create
            wellness plans using authentic Ayurveda, yoga, and lifestyle
            guidance.
          </p>

          <div className="space-y-6 mt-10">
            <div className="flex gap-4 items-start">
              <div className="w-12 h-12 rounded-full bg-white shadow flex items-center justify-center text-[#1D5C42]">
                <FaLeaf />
              </div>

              <div>
                <h4 className="font-semibold text-lg text-[#1D5C42]">
                  Natural Healing
                </h4>

                <p>Herbal remedies and balanced lifestyle practices.</p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="w-12 h-12 rounded-full bg-white shadow flex items-center justify-center text-[#1D5C42]">
                <FaUserMd />
              </div>

              <div>
                <h4 className="font-semibold text-lg text-[#1D5C42]">
                  Expert Doctors
                </h4>

                <p>Qualified Ayurvedic specialists with years of experience.</p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="w-12 h-12 rounded-full bg-white shadow flex items-center justify-center text-[#1D5C42]">
                <FaNotesMedical />
              </div>

              <div>
                <h4 className="font-semibold text-lg text-[#1D5C42]">
                  Tailored Wellness Plans
                </h4>

                <p>Customized plans for long-term balance and vitality.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Form */}
        <div className="bg-white rounded-3xl shadow-md p-10">
          <h3 className="text-3xl font-bold text-[#1D5C42]">
            Schedule Appointment
          </h3>

          <p className="mt-3">
            Fill your details and choose a suitable consultation slot.
          </p>

          <form
            onSubmit={handleSubmit}
            className="mt-8 space-y-5"
          >
            {/* Name */}
            <div className="relative">
              <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full border border-gray-200 rounded-2xl pl-12 pr-4 py-4 outline-none"
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
                required
                className="w-full border border-gray-200 rounded-2xl pl-12 pr-4 py-4 outline-none"
              />
            </div>

            {/* Phone */}
            <div className="relative">
              <FaPhoneAlt className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

              <input
                type="text"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full border border-gray-200 rounded-2xl pl-12 pr-4 py-4 outline-none"
              />
            </div>

            {/* Doctor */}
            <div className="relative">
              <FaUserMd className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

              <select
                name="doctor"
                value={formData.doctor}
                onChange={handleChange}
                required
                className="w-full border border-gray-200 rounded-2xl pl-12 pr-4 py-4 outline-none"
              >
                <option value="">Select Doctor</option>

                {doctors.map((doc) => (
                  <option key={doc.id} value={doc.name}>
                    {doc.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Date */}
            <div className="relative">
              <FaCalendarAlt className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
                className="w-full border border-gray-200 rounded-2xl pl-12 pr-4 py-4 outline-none"
              />
            </div>

            {/* Time */}
            <div className="relative">
              <FaClock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

              <input
                type="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                required
                className="w-full border border-gray-200 rounded-2xl pl-12 pr-4 py-4 outline-none"
              />
            </div>

            {/* Concern */}
            <textarea
              rows="4"
              name="concern"
              placeholder="Describe your health concern"
              value={formData.concern}
              onChange={handleChange}
              required
              className="w-full border border-gray-200 rounded-2xl px-5 py-4 outline-none"
            ></textarea>

            {/* Button */}
            <button
              type="submit"
              className="w-full bg-[#1D5C42] text-white py-4 rounded-2xl font-semibold flex items-center justify-center gap-3 hover:opacity-95 transition"
            >
              Confirm Booking <FaArrowRight />
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}