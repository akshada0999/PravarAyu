import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import logo from '../assets/pravarayulogo.png';
import { useNavigate } from 'react-router-dom';

export default function Navbar(){

const navigate = useNavigate();

 return <nav className='sticky top-0 z-50 flex justify-between items-center px-8 py-4 bg-white/75 shadow'>

  <Link to='/' className='flex items-center gap-2 text-3xl  font-bold font-serif text-green-800 leading-none'>
  <img src={logo} alt="logo" className='w-12 h-12 object-contain' />
  <span>Pravar Ayu</span>
</Link>

  <div className='hidden md:flex gap-8 text-[#6B4F3A] font-medium'>
    <Link to='/'>Home</Link>
   <Link to='/about'>About</Link>
   <Link to='/doctors'>Our Doctors</Link>
   <Link to='/yoga'>Yoga Courses</Link>
   <Link to='/products'>Store</Link>
   <Link to='/contact'>Contact</Link>
  </div>
  <div className='flex items-center gap-4'>
   <FaShoppingCart className='text-green-800 text-xl'/>
   <button  onClick={() => navigate('/login')} className='px-4 py-2 rounded-xl bg-green-800 text-white'>Log in</button>
   <button onClick={() => navigate('/book')} className='px-5 py-2 rounded-xl bg-yellow-500'>Book Consultation</button>
  </div>
 </nav>
}