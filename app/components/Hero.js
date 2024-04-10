import heroImage from '../../public/Fast loading-rafiki.svg'
import { BsRouterFill } from "react-icons/bs";
import { IoWifi } from "react-icons/io5";
import Image from 'next/image';
const Hero = () => {
    return (
        <div className="grid grid-cols-2 pt-20 text-white">
            <div className='flex ps-40 pt-7 flex-col '><h1 className='font-semibold text-6xl w-[537px]'>Switch to the best internet provider in your area</h1>
                <p className='pe-20 mt-8 text-blue-300'>Dynamic Network provides an extensive range of high quality data & internet connectivity services throughout Bonpara.</p>
                <div>
                    <button className='py-4 px-9 text-white mt-8 rounded-xl font-bold text-lg bg-blue-600'>View Package</button>
                </div>
            </div>
            <div className='relative ps-24'><Image src={heroImage} alt='Hero Image' />
                <IoWifi size={90} className='text-blue-400 absolute top-[138px] left-[52px] -rotate-45' />
                <BsRouterFill size={70} className='text-blue-400 absolute top-[-15px] left-[422px] ' />
            </div>
        </div>
    )
}

export default Hero