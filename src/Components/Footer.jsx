import { footer } from 'framer-motion/client'
import logo from '../assets/logo2.svg'
import vector from '../assets/vector.svg'
import vector1 from '../assets/vector-1.svg'
import vector2 from '../assets/vector-2.svg'
import vector3 from '../assets/vector-3.svg'
import vector4 from '../assets/vector-4.svg'
import vector5 from '../assets/vector-5.svg'
export default function Footer(){
    return(
        <footer className='w-full flex items-center justify-center bg-black p-5 pt-10 text-[#dadada]'>
            <div className='flex items-center justify-between p-4 w-[85%] mx-auto '>
                <ul className='flex flex-col gap-[5px] '>
                    <li className='hover:text-white'>COMPANY</li>
                    <li className='hover:text-white'>NEWS</li>
                    <li className='hover:text-white'>CARS</li>
                    <li className='hover:text-white'>FINANCIALS</li>
                    <li className='hover:text-white'>CONTACT</li>
                </ul>
                <img className='h-18' src={logo} alt="" />
                <div className=''>
                    <p className='text-2xl mb-3'>Follow us on:</p>
                    <div className='flex flex-wrap gap-2 w-35'>
                        <img className='w-7 mb-1' src={vector} alt="" />
                        <img className='w-7 mb-1' src={vector1} alt="" />
                        <img className='w-7 mb-1' src={vector2} alt="" />
                        <img className='w-7' src={vector3} alt="" />
                        <img className='w-7' src={vector4} alt="" />
                        <img className='w-7' src={vector5} alt="" />
                       
                    </div>
                </div>
            </div>
        </footer>
    )
}