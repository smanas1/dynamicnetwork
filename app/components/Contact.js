import React from 'react'
import Whatsapp from '../svgs/Whatsapp'
import Phone from '../svgs/Phone'
import { MdEmail } from "react-icons/md";



const Contact = () => {
    return (
        <div className=' flex  justify-center pt-20 h-screen bg-[#F7F5FF]'><div className='py-4 px-10 h-60 mt-10  shadow-lg bg-white rounded-md '>
            <h1 className='text-lg mb-2 font-semibold'>Contact Us For Any Support</h1>
            <div> <div>
                <button type="button" className="text-gray-900 w-full bg-white  border border-gray-200  focus:outline-none  font-medium rounded-md text-sm px-2 py-2 text-center inline-flex items-center  me-2 mb-2">
                    <Phone />
                    <a className='ms-1 text-base text-purple-500' href="tel:01303839889">Call Anas 01303839889</a>
                </button>
            </div>

                <div>
                    <button type="button" className="text-gray-900 w-full bg-white  border border-gray-200  focus:outline-none  font-medium rounded-md text-sm px-[6px] py-1 text-center inline-flex items-center  me-2 mb-2">
                        <Whatsapp />
                        <a className='ms-1 text-base text-green-500' href="https://wa.me/+8801303839889">Text Anas 01303839889</a>
                    </button>
                </div>

                <div>
                    <button type="button" className="text-gray-900 w-full bg-white  border border-gray-200  focus:outline-none  font-medium rounded-md text-sm px-[10px] py-1 text-center inline-flex items-center  me-2 mb-2">
                        <MdEmail size={25} className='text-red-700' />
                        <a className='ms-1 text-base text-red-500' href="mailto:babu509963@gmail.com">Email US</a>
                    </button>
                </div>


            </div>
        </div></div>
    )
}

export default Contact