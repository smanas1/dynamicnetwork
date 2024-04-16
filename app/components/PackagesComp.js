import React from 'react'
import { FaWifi } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";

const PackagesComp = () => {
    return (
        <div className='flex gap-9 flex-wrap'>
            <div className='py-9 px-11 rounded-md bg-white shadow-lg'>
                <h3 className='text-[28px] font-semibold'>Starter</h3>
                <div className='flex justify-center items-center rounded-md bg-[#F7F5FF] mt-5  py-4 px-3'>
                    <div className='me-4'>
                        <FaWifi size={40} />
                    </div>
                    <div>

                        <h4 className='text-[28px] font-semibold pe-6 '> 35 Mbps</h4>
                    </div>

                </div>
                {/* List */}
                <div className='my-9'>
                    <ul>
                        <li className='flex gap-4 text-lg items-center'><FaCheckCircle className='text-blue-500' size={22} /> Optical Fiber Connection</li>
                    </ul>
                </div>
                {/* Button */}
                <div className='flex justify-center'>
                    <button className='bg-blue-500 text-white py-3 hover:bg-blue-700 transition-all px-7 rounded-lg font-semibold text-lg'>Buy Package</button>
                </div>
            </div>

        </div>


    )
}

export default PackagesComp