import {
  FaLeaf,
  FaSpa,
  FaHandsHelping,
  FaHeart,
  FaSeedling,
  FaArrowRight,
} from "react-icons/fa";

export default function About() {
  return (
    <div className="bg-[#F8F5EF] text-[#6B4F3A]">
      {/* Hero Section */}
      <section className="grid md:grid-cols-2 min-h-screen">
        {/* Left Image */}
        <div
          className="bg-cover bg-center min-h-[500px]"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=1600&auto=format&fit=crop')",
          }}
        ></div>

        {/* Right Content */}
        <div className="flex items-center px-8 md:px-16 py-16">
          <div>
            <p className="uppercase tracking-[0.3em] text-sm text-[#6B4F3A]">
              Our Sanctuary
            </p>

            <h1 className="text-5xl md:text-6xl font-bold text-[#1D5C42] mt-4 leading-tight">
              Where Healing
              <br />
              Meets Harmony
            </h1>

            <p className="mt-6 text-lg leading-8">
              At Pravar Ayu Clinic, we combine ancient Ayurvedic wisdom with
              modern wellness practices. Our mission is to help you restore
              balance, energy, and long-term health through natural healing.
            </p>

            <button className="mt-8 bg-[#1D5C42] text-white px-6 py-3 rounded-2xl flex items-center gap-3 hover:scale-105 transition">
              Explore Treatments <FaArrowRight />
            </button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="px-8 md:px-16 py-20">
        <div className="text-center">
          <p className="uppercase tracking-[0.3em] text-sm">Why Choose Us</p>

          <h2 className="text-5xl font-bold text-[#1D5C42] mt-4">
            Personalized Healing
          </h2>

          <p className="mt-5 max-w-3xl mx-auto leading-8">
            Every treatment is tailored to your body constitution, lifestyle,
            and wellness goals.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-14">
          {/* Card 1 */}
          <div className="bg-white p-10 rounded-3xl shadow-sm text-center hover:shadow-lg transition">
            <div className="w-16 h-16 rounded-full bg-green-50 mx-auto flex items-center justify-center text-[#1D5C42] text-2xl">
              <FaLeaf />
            </div>

            <h3 className="text-2xl font-semibold text-[#1D5C42] mt-6">
              Authentic Ayurveda
            </h3>

            <p className="mt-4 leading-7">
              Traditional herbs, therapies, and consultations based on your
              dosha balance.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-10 rounded-3xl shadow-sm text-center hover:shadow-lg transition">
            <div className="w-16 h-16 rounded-full bg-green-50 mx-auto flex items-center justify-center text-[#1D5C42] text-2xl">
              <FaSpa />
            </div>

            <h3 className="text-2xl font-semibold text-[#1D5C42] mt-6">
              Luxury Therapies
            </h3>

            <p className="mt-4 leading-7">
              Relaxing massages, Panchakarma detox, and rejuvenation therapies.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-10 rounded-3xl shadow-sm text-center hover:shadow-lg transition">
            <div className="w-16 h-16 rounded-full bg-green-50 mx-auto flex items-center justify-center text-[#1D5C42] text-2xl">
              <FaHandsHelping />
            </div>

            <h3 className="text-2xl font-semibold text-[#1D5C42] mt-6">
              Personal Guidance
            </h3>

            <p className="mt-4 leading-7">
              Dedicated support from experienced practitioners throughout your
              wellness journey.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="bg-white px-8 md:px-16 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-5xl font-bold text-[#1D5C42] leading-tight">
              Healing Rooted in Nature
            </h2>

            <p className="mt-6 leading-8 text-lg">
              We believe true health comes from aligning body, mind, and spirit.
              Through herbal remedies, movement, mindfulness, and lifestyle
              practices, we help you reconnect with natural vitality.
            </p>

            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="flex gap-3 items-center">
                <FaHeart className="text-[#1D5C42]" />
                <span>Holistic Wellness</span>
              </div>

              <div className="flex gap-3 items-center">
                <FaSeedling className="text-[#1D5C42]" />
                <span>Natural Remedies</span>
              </div>
            </div>
          </div>

          <img
            src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1200&auto=format&fit=crop"
            alt="Wellness"
            className="rounded-3xl shadow-md h-[500px] object-cover w-full"
          />
        </div>
      </section>
    </div>
  );
}