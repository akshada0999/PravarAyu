import { FaShoppingCart, FaStar } from 'react-icons/fa';
export default function ProductCard({ image, name, price }){
  return (
    <div className='bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-lg transition'>
      <img src={image} alt={name} className='h-64 w-full object-cover'/>
      <div className='p-6'>
        <div className='flex items-center gap-1 text-yellow-500'>
          <FaStar/><FaStar/><FaStar/><FaStar/><FaStar/>
        </div>
        <h3 className='mt-3 text-xl font-semibold text-green-800'>{name}</h3>
        <p className='mt-2 text-2xl font-bold text-[#6B4F3A]'>₹{price}</p>
        <button className='mt-5 w-full bg-yellow-500 py-3 rounded-2xl flex items-center justify-center gap-2'>
          <FaShoppingCart/> Add to Cart
        </button>
      </div>
    </div>
  )
}