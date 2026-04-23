import Doctors from "./Doctors";
import Services from "./Services";
import Products from "./Products";
import Yoga from "./Yoga";
import { useNavigate } from 'react-router-dom';

export default function Home(){

  const navigate = useNavigate();

 return <>
 <section className='h-[85vh] bg-cover bg-center flex items-center justify-center text-center' style={{backgroundImage:"url('https://plus.unsplash.com/premium_photo-1746888841309-04733cf041fe?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGElMjByb29vbSUyMG9mJTIwd29vZGVuJTIwZnVybml0dXJlJTIwYW5kJTIwc3VubGlnaHQlMjBjb21pbmclMjBmcm9tJTIwd2luZG93JTIwZnVsbCUyMG9mJTIwcGxhbnRzfGVufDB8MHwwfHx8MA%3D%3D')"}}>
   <div className='bg-white/60 p-10 rounded-2xl'>
    <p className='tracking-widest'>WELCOME TO YOUR SANCTUARY</p>
    <h1 className='text-6xl  font-bold text-green-800 font-serif'>Natural Healing,</h1>
    <h2 className='text-5xl italic text-green-700 font-serif'>Ancient Wisdom</h2>
    <button onClick={() => navigate('/book')} className='mt-4 px-4 py-2 rounded-xl bg-green-800 text-white border-white'>Book Consultation</button>
   </div>
 </section>
 
        <Services/>  
       <Doctors/>
       <Products/>
       <Yoga/>
 </>
}