export default function Yoga() {
  return (
    <div className="relative min-h-screen">
      {/* Background Image */}
      <img
        src="https://images.unsplash.com/photo-1758274535230-3641d0632878?q=80&w=1331&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Yoga"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Green Overlay */}
      <div className="absolute inset-0 bg-green-900/70"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center min-h-screen px-6">
        <h1 className="text-5xl md:text-6xl font-semibold text-white font-serif">
          Deepen Your Practice
        </h1>

        <p className="mt-6 max-w-2xl text-lg text-gray-200">
          Join our immersive yoga and meditation courses. Designed for all
          levels to cultivate inner peace and physical vitality.
        </p>

        <button className="mt-8 bg-yellow-500 text-black px-8 py-4 rounded-2xl text-lg font-medium hover:bg-yellow-400 transition">
          Explore Courses
        </button>
      </div>
    </div>
  );
}
