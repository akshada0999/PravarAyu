import {
  FaCheckCircle,
  FaLeaf,
  FaUserMd,
  FaCalendarAlt,
  FaClock,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaArrowLeft,
  FaHome,
} from "react-icons/fa";
import { Link } from "react-router-dom";

export default function ConfirmBooking() {
  const booking = {
    patient: "Rahul Sharma",
    email: "rahul@email.com",
    phone: "+91 98765 43210",
    doctor: "Dr. Aarav Sharma",
    date: "25 April 2026",
    time: "11:30 AM",
    mode: "In Clinic Consultation",
    location: "Pravar Ayu Clinic, Pune",
    bookingId: "PA-2026-1045",
  };

  return (
    <div className="min-h-screen bg-[#F8F5EF] text-[#6B4F3A] flex items-center justify-center px-6 py-14">
      <div className="w-full max-w-4xl bg-white rounded-3xl shadow-lg overflow-hidden">
        {/* Top Success Banner */}
        <div className="bg-[#1D5C42] text-white px-10 py-12 text-center">
          <FaCheckCircle className="text-6xl mx-auto mb-5 text-[#D6A420]" />

          <p className="uppercase tracking-[0.3em] text-sm">
            Booking Confirmed
          </p>

          <h1 className="text-4xl md:text-5xl font-bold mt-4">
            Your Consultation is Scheduled
          </h1>

          <p className="mt-4 text-white/90 max-w-2xl mx-auto">
            Thank you for choosing Pravar Ayu. Your appointment has been
            successfully booked.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-0">
          {/* Left Details */}
          <div className="p-10 border-r border-gray-100">
            <h2 className="text-3xl font-bold text-[#1D5C42]">
              Appointment Details
            </h2>

            <div className="space-y-5 mt-8">
              <div className="flex gap-4">
                <FaUserMd className="text-[#1D5C42] mt-1" />
                <div>
                  <p className="text-sm text-gray-500">Doctor</p>
                  <p className="font-semibold">{booking.doctor}</p>
                </div>
              </div>

              <div className="flex gap-4">
                <FaCalendarAlt className="text-[#1D5C42] mt-1" />
                <div>
                  <p className="text-sm text-gray-500">Date</p>
                  <p className="font-semibold">{booking.date}</p>
                </div>
              </div>

              <div className="flex gap-4">
                <FaClock className="text-[#1D5C42] mt-1" />
                <div>
                  <p className="text-sm text-gray-500">Time</p>
                  <p className="font-semibold">{booking.time}</p>
                </div>
              </div>

              <div className="flex gap-4">
                <FaMapMarkerAlt className="text-[#1D5C42] mt-1" />
                <div>
                  <p className="text-sm text-gray-500">Location</p>
                  <p className="font-semibold">{booking.location}</p>
                </div>
              </div>

              <div className="flex gap-4">
                <FaLeaf className="text-[#1D5C42] mt-1" />
                <div>
                  <p className="text-sm text-gray-500">Consultation Type</p>
                  <p className="font-semibold">{booking.mode}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Patient Info */}
          <div className="p-10 bg-[#F8F5EF]">
            <h2 className="text-3xl font-bold text-[#1D5C42]">
              Patient Details
            </h2>

            <div className="space-y-5 mt-8">
              <div>
                <p className="text-sm text-gray-500">Patient Name</p>
                <p className="font-semibold">{booking.patient}</p>
              </div>

              <div className="flex gap-3 items-center">
                <FaEnvelope className="text-[#1D5C42]" />
                <span>{booking.email}</span>
              </div>

              <div className="flex gap-3 items-center">
                <FaPhoneAlt className="text-[#1D5C42]" />
                <span>{booking.phone}</span>
              </div>

              <div className="mt-6">
                <p className="text-sm text-gray-500">Booking ID</p>
                <p className="text-xl font-bold text-[#1D5C42]">
                  {booking.bookingId}
                </p>
              </div>
            </div>

            {/* Note */}
            <div className="mt-10 bg-white rounded-2xl p-5 border border-green-100">
              <p className="text-sm leading-7">
                Please arrive 10 minutes early. Bring previous medical records
                if available. You’ll receive confirmation via email and phone.
              </p>
            </div>

            {/* Buttons */}
            <div className="grid gap-4 mt-8">
              <Link
                to="/"
                className="w-full bg-[#1D5C42] text-white py-4 rounded-2xl font-semibold flex items-center justify-center gap-3 hover:opacity-95 transition"
              >
                <FaHome />
                Back to Home
              </Link>

              <Link
                to="/book"
                className="w-full border border-[#1D5C42] text-[#1D5C42] py-4 rounded-2xl font-semibold flex items-center justify-center gap-3 hover:bg-green-50 transition"
              >
                <FaArrowLeft />
                Book Another Appointment
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}