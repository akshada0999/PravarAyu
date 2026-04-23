// components/ServiceCard.jsx
export default function ServiceCard({ icon: Icon, title, description }) {
    return (
        <div className="bg-[#f1ece4] rounded-2xl shadow-sm p-8 text-center">
            <div className="w-14 h-14 mx-auto flex items-center justify-center bg-green-100 rounded-full">
                <Icon className="text-green-800 text-xl" />
            </div>

            <h2 className="mt-6 text-xl font-semibold text-green-900">
                {title}
            </h2>

            <p className="mt-4 text-gray-600">
                {description}
            </p>
        </div>
    );
}