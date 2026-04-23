import ProductCard from "../components/ProductCard";

export default function Apothecary() {
  const products = [
    {
      image: "https://images.unsplash.com/photo-1701689934782-0ec998aa9716?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGF5dXJ2ZWRpYyUyMHByb2R1Y3RzfGVufDB8fDB8fHww",
      name: "Ashwagandha Powder",
      price: 499,
    },

    {
      image: "https://i.pinimg.com/736x/87/91/aa/8791aadbacfd9bce64f4ba098c197382.jpg",
      name: "Turmeric Latte Mix",
      price: 599,
    },

    {
      image: "https://i.pinimg.com/736x/51/de/b4/51deb4528c6cd0b51eb06486876580a6.jpg",
      name: "Brahmi Oil",
      price: 450,
    },
  ];

  return (
    <div className="bg-[#f5f1ea] min-h-screen py-16 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="text-center">
          <h1 className="text-4xl font-semibold text-green-900 font-serif">
            Apothecary
          </h1>
          <p className="mt-3 text-gray-600">
            Authentic herbal formulations crafted with care.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {products.map((item, i) => (
            <ProductCard key={i} {...item} />
          ))}
        </div>

      </div>
    </div>
  );
}