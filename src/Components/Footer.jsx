import { footer } from 'framer-motion/client'
import logo from '../assets/logo2.svg'

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
                    <li className='hover:text-white'>ABOUT</li>
                </ul>
                <img className='h-18' src={logo} alt="" />
                <div className=''>
                    <p className='text-2xl mb-3'>Follow us on:</p>
                    <div className='flex flex-wrap gap-2 w-35'>
                        
                       
                    </div>
                </div>
            </div>
        </footer>
    )
}