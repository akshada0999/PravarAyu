import { FaCalendarCheck } from 'react-icons/fa';
export default function DoctorCard({ image, name, role, exp, qua }){
  return (
    <div className='bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-lg transition'>
      <img src={image} alt={name} className='h-72 w-full object-cover'/>
      <div className='p-6'>
        <h3 className='text-2xl font-semibold text-green-800'>{name}</h3>
        <p className='mt-1 text-[#6B4F3A]'>{role}</p>
        <p className='mt-2 text-sm text-[#6B4F3A]'>{qua}</p>
        <p className='mt-2 text-sm text-[#6B4F3A]'>{exp}+ Years Experience</p>
        
        <button className='mt-5 w-full bg-green-800 text-white py-3 rounded-2xl flex items-center justify-center gap-2'>
          <FaCalendarCheck/> Book Consultation
        </button>
      </div>
    </div>
  )
}