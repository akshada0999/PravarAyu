import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
  FaWhatsapp,
} from "react-icons/fa";

export default function Contact() {
  return (
    <div className="min-h-screen bg-[#F8F5EF] text-[#6B4F3A]">
      {/* Hero Section */}
      <section
        className="relative flex h-[55vh] items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://plus.unsplash.com/premium_photo-1664476788294-c13c558ceb14?q=80&w=1356&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8fDB8fHx8fA%3D%3D')",
        }}
      >
        <div className="absolute inset-0 bg-black/35"></div>

        <div className="relative z-10 px-6 text-center text-white">
          <p className="text-sm uppercase tracking-[0.3em]">Get In Touch</p>

          <h1 className="mt-4 text-5xl font-bold md:text-6xl">Contact Us</h1>

          <p className="mx-auto mt-4 max-w-2xl text-lg">
            Begin your healing journey with expert Ayurvedic guidance and
            personalized care.
          </p>
        </div>
      </section>

      {/* Single Contact Section */}
      <section className="mx-auto max-w-5xl px-8 py-20 text-center">
        <p className="text-sm uppercase tracking-[0.3em]">Reach Us</p>

        <h2 className="mt-4 text-5xl font-bold text-[#1D5C42]">
          Visit Our Clinic
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8">
          We are here to help you restore balance through Ayurveda, yoga, and
          holistic therapies.
        </p>

        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {/* Address */}
          <div className="rounded-3xl bg-white p-6 shadow-md">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#F8F5EF] text-[#1D5C42]">
              <FaMapMarkerAlt size={20} />
            </div>
            <h4 className="mt-4 text-xl font-semibold text-[#1D5C42]">
              Address
            </h4>
            <p className="mt-2">Pune, Maharashtra, India</p>
          </div>

          {/* Phone */}
          <div className="rounded-3xl bg-white p-6 shadow-md">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#F8F5EF] text-[#1D5C42]">
              <FaPhoneAlt size={18} />
            </div>
            <h4 className="mt-4 text-xl font-semibold text-[#1D5C42]">
              Phone
            </h4>
            <p className="mt-2">+91 98765 43210</p>
          </div>

          {/* Email */}
          <div className="rounded-3xl bg-white p-6 shadow-md">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#F8F5EF] text-[#1D5C42]">
              <FaEnvelope size={18} />
            </div>
            <h4 className="mt-4 text-xl font-semibold text-[#1D5C42]">
              Email
            </h4>
            <p className="mt-2">info@pravarayu.com</p>
          </div>

          {/* Hours */}
          <div className="rounded-3xl bg-white p-6 shadow-md">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#F8F5EF] text-[#1D5C42]">
              <FaClock size={18} />
            </div>
            <h4 className="mt-4 text-xl font-semibold text-[#1D5C42]">
              Hours
            </h4>
            <p className="mt-2">Mon - Sat : 9:00 AM - 7:00 PM</p>
          </div>
        </div>

        {/* WhatsApp Button */}
        <button className="mt-12 inline-flex items-center gap-3 rounded-2xl bg-green-600 px-8 py-4 text-white transition hover:scale-105">
          <FaWhatsapp />
          Chat on WhatsApp
        </button>
      </section>

      {/* Google Map */}
      <section className="px-8 pb-20">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-3xl shadow-md">
          <iframe
            title="map"
            src="https://www.google.com/maps?q=Pune,Maharashtra&output=embed"
            className="h-[450px] w-full border-0"
            loading="lazy"
          ></iframe>
        </div>
      </section>
    </div>
  );
}