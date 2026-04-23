import { useEffect, useState } from "react";
import axios from "axios";
import DoctorCard from "../components/DoctorCard";

export default function Doctors() {
  const [doctors, setDoctors] = useState([]);

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

  return (
    <div className="bg-[#f5f1ea] min-h-screen py-16 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-4xl font-semibold text-green-900 font-serif">
              Our Healers
            </h1>

            <p className="mt-2 text-gray-600">
              Expert practitioners dedicated to your wellbeing.
            </p>
          </div>

          <button className="text-green-800 font-medium">
            Meet all doctors →
          </button>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8 mt-10">
          {doctors.length > 0 ? (
            doctors.map((doc) => (
              <DoctorCard
                key={doc.id}
                image={doc.image}
                name={doc.name}
                role={doc.role}
                exp={doc.exp}
                qua={doc.qua}
              />
            ))
          ) : (
            <p>No doctors available.</p>
          )}
        </div>

      </div>
    </div>
  );
}