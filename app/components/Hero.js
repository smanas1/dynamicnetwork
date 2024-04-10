import heroImage from '../../public/Fast loading-rafiki.svg'
import { BsRouterFill } from "react-icons/bs";
import { IoWifi } from "react-icons/io5";
import Image from 'next/image';
const Hero = () => {
    return (
        <div className="md:grid  md:grid-cols-2  max-md:pb-10 sm:pt-10 lg:h-screen lg:pt-52  text-white container">
            <div className='flex lg:px-8 xl:ps-40 pt-14 lg:pt-7 flex-col max-md:items-center'>
                <h1 className='font-semibold lg:text-5xl xl:text-6xl max-sm:mt-7 lg:w-[434px] xl:w-[538px] max-md:text-4xl max-md:text-center md:text-[27px]'>Switch to the best internet provider in your area</h1>
                <p className='lg:pe-5 md:text-sm text-sm max-md:text-center md:pe-0 mt-4 lg:text-sm xl:pe-20 md:mt-5 lg:mt-8 text-blue-300'>Dynamic Network provides an extensive range of high quality data & internet connectivity services throughout Bonpara.</p>
                <div>
                    <button className='xl:py-4 py-2 px-6 lg:py-3 lg:px-7 xl:px-9 text-white mt-8 rounded-lg font-bold   lg:text-lg bg-blue-600'>View Package</button>
                </div>
            </div>
            <div className='relative lg:ps-24 hidden md:block'><Image src={heroImage} alt='Hero Image' />
                <IoWifi size={90} className='text-blue-400 hidden lg:block absolute top-[138px] left-[52px] -rotate-45' />
                <BsRouterFill size={70} className='text-blue-400 absolute hidden lg:block lg:top-[-17px] xl:top-[-15px] lg:left-[360px] xl:left-[422px] ' />
            </div>
        </div>
    )
}

export default Hero