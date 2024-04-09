"use client"
// import { IoCallOutline } from "react-icons/io5";
import { CirclesWithBar, Radio } from "react-loader-spinner"
import { IoIosCall } from "react-icons/io";

const CallIcon = () => {
    return (
        <div className="relative cursor-pointer">

            <div className="absolute -top-5">
                <Radio

                    visible={true}
                    height="25"
                    width="25"
                    colors={['#38BDF8', '#38BDF8', '#38BDF8']}
                    ariaLabel="radio-loading"
                    wrapperStyle={{}}
                    wrapperClass=""
                />
            </div>
            <IoIosCall className="text-blue-400 absolute -top-3 left-[-15px]" size={33} />
        </div>
    )
}

export default CallIcon