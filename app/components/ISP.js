
import Image from 'next/image';
import simlessImage from '../../public/feature-01b.png'
import relaiable from '../../public/feature-02a.png'
import protect from '../../public/feature-03a.png'
import ftp from '../../public/feature-04a.png'
const ISP = () => {
    return (
        <div className="container mb-20 mt-20 ">
            <div className="flex flex-col items-center justify-center ">
                <h2 className="  md:w-[37rem] text-center text-3xl md:text-5xl font-bold">We are Internet Service Provider company
                </h2>
                <p className="hidden md:block md:w-[32rem] text-center mt-9" >Experience the difference with our top-notch internet services. Contact us today to explore our internet plans, installation options. </p>
            </div>
            <div className="flex justify-around flex-wrap gap-3 gap-y-10 mt-14">
                <div className='flex flex-col justify-center items-center'>
                    <Image src={simlessImage} alt='Sim Less' width={80} height={80} />
                    <h3 className='my-3 font-semibold text-xl'>Wifi seamless</h3>
                    <p className='w-[16rem] text-center'>Experience the convenience and reliability of seamless Wi-Fi </p>
                </div>

                <div className='flex flex-col justify-center items-center'>
                    <Image src={relaiable} alt='Sim Less' width={80} height={80} />
                    <h3 className='font-semibold text-xl my-3'>Reliable connection</h3>
                    <p className='w-[16rem] text-center'>Experience the difference with our reliable connection services </p>
                </div>
                <div className='flex flex-col justify-center items-center'>
                    <Image src={protect} alt='Sim Less' width={80} height={80} />
                    <h3 className='my-3 font-semibold text-xl'>Customer Support</h3>
                    <p className='w-[16rem] text-center'>Our dedicated support team is equipped to address issues  </p>
                </div>
                <div className='flex flex-col justify-center items-center'>
                    <Image src={ftp} alt='Sim Less' width={80} height={80} />
                    <h3 className='my-3 font-semibold text-xl'>FTP Server</h3>
                    <p className='w-[16rem] text-center'>
                        You can download movies and Games on high speed
                    </p>
                </div>
            </div>
        </div>
    )
}

export default ISP