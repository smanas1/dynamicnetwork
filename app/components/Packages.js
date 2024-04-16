import React from 'react'
import PackagesComp from './PackagesComp'


const Packages = () => {
    return (
        <div className='bg-[#F7F5FF] py-8 md:py-28'>
            <div className=''>
                <div className='flex flex-col items-center'>
                    <h2 className='text-center text-3xl md:text-5xl font-bold'>Choose your package</h2>
                    <p className="hidden md:block md:w-[32rem] text-center mt-9">Chose a perfect package for you by considering your requirements, data limit and internet speed.
                    </p>
                    <div className='my-10'>
                        <PackagesComp />
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Packages