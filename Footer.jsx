import { FaFacebookF, FaInstagram, FaYoutube, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

export default function Footer(){
  return (
    <footer className='bg-[#1D5C42] text-white mt-20'>
      <div className='max-w-7xl mx-auto px-8 py-16 grid md:grid-cols-4 gap-10'>
        <div>
          <h2 className='text-3xl font-bold'>Pravar Ayu</h2>
          <p className='mt-4 text-white/80 leading-7'>Ancient Ayurvedic wisdom for modern living. Personalized healing, yoga, therapies, and natural wellness.</p>
          <div className='flex gap-4 mt-6 text-xl'>
            <FaFacebookF className='cursor-pointer'/>
            <FaInstagram className='cursor-pointer'/>
            <FaYoutube className='cursor-pointer'/>
          </div>
        </div>

        <div>
          <h3 className='text-xl font-semibold'>Quick Links</h3>
          <ul className='mt-4 space-y-3 text-white/80'>
            <li>About Us</li>
            <li>Our Doctors</li>
            <li>Yoga Courses</li>
            <li>Store</li>
            <li>Journal</li>
          </ul>
        </div>

        <div>
          <h3 className='text-xl font-semibold'>Services</h3>
          <ul className='mt-4 space-y-3 text-white/80'>
            <li>Consultations</li>
            <li>Panchakarma</li>
            <li>Massage Therapy</li>
            <li>Meditation</li>
            <li>Diet Plans</li>
          </ul>
        </div>

        <div>
          <h3 className='text-xl font-semibold'>Contact</h3>
          <ul className='mt-4 space-y-4 text-white/80'>
            <li className='flex gap-3'><FaMapMarkerAlt className='mt-1'/> Pune, Maharashtra</li>
            <li className='flex gap-3'><FaPhoneAlt className='mt-1'/> +91 98765 43210</li>
            <li className='flex gap-3'><FaEnvelope className='mt-1'/> info@pravarayu.com</li>
          </ul>
        </div>
      </div>
      <div className='border-t border-white/20 py-5 text-center text-white/70'>© 2026 Pravar Ayu Clinic. All rights reserved.</div>
    </footer>
  )
}