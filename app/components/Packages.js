import React from 'react'
import PackagesComp from './PackagesComp'


const Packages = () => {
    return (
        <div className='bg-[#F7F5FF] py-28'>
            <div className=''>
                <div className='flex flex-col items-center'>
                    <h1 className='text-center text-3xl md:text-5xl font-bold'>Choose your package</h1>
                    <p className="hidden md:block md:w-[32rem] text-center mt-9">Chose a perfect package for you by considering your requirements, data limit and internet speed.
                    </p>
                    <div>
                        <PackagesComp />
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Packages