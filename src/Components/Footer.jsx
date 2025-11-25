import { footer } from 'framer-motion/client'
import logo from '../assets/logo2.svg'
import yt from '../assets/yt.svg'
import x from '../assets/x.svg'
import thread from '../assets/thread.svg'
import facebook from '../assets/facebook.svg'
import insta from '../assets/insta.svg'
import linkedin from '../assets/linkedin.svg'
import tg from '../assets/tg.svg'
import tiktok from '../assets/tiktok.svg'

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
                        <img className='w-7' src={yt} alt="" />
                        <img className='w-7' src={tg} alt="" />
                        <img className='w-7' src={linkedin} alt="" />
                        <img className='w-7' src={thread} alt="" />
                        <img className='w-7' src={tiktok} alt="" />
                        <img className='w-7' src={facebook} alt="" />
                        <img className='w-7' src={x} alt="" />
                        <img className='w-7' src={insta} alt="" />
                       
                    </div>
                </div>
            </div>
        </footer>
    )
}