import { FaLeaf, FaWind } from "react-icons/fa";
import { GiSparkles } from "react-icons/gi";

export default function Services() {
    return (
        <div className="bg-[#f5f1ea] min-h-screen">
            {/* Heading Section */}
            <div className="text-center py-20 px-4">
                <h1 className="text-5xl font-[\'Times_New_Roman\'] font-semibold text-green-900">
                    Pathways to Balance
                </h1>
                <p className="mt-6 text-gray-600 max-w-2xl mx-auto text-lg">
                    Our holistic approaches address the root cause of imbalance,
                    promoting lasting wellness from within.
                </p>
            </div>

            {/* Cards Section */}
            <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 px-6 pb-20">
                {/* Card 1 */}
                <div className="bg-[#f1ece4] rounded-2xl shadow-sm p-8 text-center">
                    <div className="w-14 h-14 mx-auto flex items-center justify-center bg-green-100 rounded-full">
                        <FaLeaf className="text-green-800 text-xl" />
                    </div>
                    <h2 className="mt-6 text-xl font-semibold text-green-900 font-serif">
                        Ayurvedic Consultations
                    </h2>
                    <p className="mt-4 text-gray-600">
                        Personalized healing plans based on your unique dosha
                        constitution.
                    </p>
                </div>

                {/* Card 2 */}
                <div className="bg-[#f1ece4] rounded-2xl shadow-sm p-8 text-center">
                    <div className="w-14 h-14 mx-auto flex items-center justify-center bg-green-100 rounded-full ">
                        <GiSparkles className="text-green-800 text-xl" />
                    </div>
                    <h2 className="mt-6 text-xl font-semibold text-green-900 font-serif">
                        Panchakarma Detox
                    </h2>
                    <p className="mt-4 text-gray-600">
                        Deep cleansing therapies to restore balance and vitality to your
                        body.
                    </p>
                </div>

                {/* Card 3 */}
                <div className="bg-[#f1ece4] rounded-2xl shadow-sm p-8 text-center">
                    <div className="w-14 h-14 mx-auto flex items-center justify-center bg-green-100 rounded-full">
                        <FaWind className="text-green-800 text-xl" />
                    </div>
                    <h2 className="mt-6 text-xl font-semibold text-green-900 font-serif">
                        Yoga & Meditation
                    </h2>
                    <p className="mt-4 text-gray-600">
                        Breathwork and movement practices to harmonize mind and spirit.
                    </p>
                </div>
            </div>
        </div>
    );
}

