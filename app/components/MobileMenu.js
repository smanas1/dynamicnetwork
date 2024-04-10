'use client'
import logo from "../../public/logo.svg";
import Image from 'next/image';
import { useEffect, useState } from "react";
import { HiMenu } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import { menuData } from "../data";
import Link from 'next/link';
import CallIcon from "./CallIcon";
const MobileMenu = () => {
    const [open, setOpen] = useState(false)

    useEffect(() => {
        let handlear = () => {
            setOpen(false)
            console.log(open)
        }
        document.body.addEventListener("click", handlear)
        return () => {
            document.body.removeEventListener("click", handlear)
        }
    })
    return (

        <div className="flex justify-between items-center container">
            {/* Logo */}
            <Image src={logo} alt="logo" height={150} width={150} />
            <div>
                {/* Icon */}
                <HiMenu className="text-blue-400 w-16 cursor-pointer" size={30} onClick={() => setOpen(true)} />

                {/* Display */}

                <div className={`${open ? `w-3/4` : `w-0`} h-screen absolute z-10 transition-all border-l border-genarel bg-[#111624] right-0 top-0`}>
                    {
                        open && (
                            <div>
                                <div className="flex justify-end p-5"><IoClose className="cursor-pointer text-white" size={30} onClick={() => setOpen(false)} />
                                </div>
                                {/* Menus */}
                                <div className="flex flex-col justify-center h-[300px] items-center">
                                    {menuData.map((item, i) => (
                                        <Link key={i} href={item.link} className="text-black my-3 nav-item ">{item.title}</Link>
                                    ))}
                                    <div className="mt-10 ms-6">
                                        <CallIcon />
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>


            </div>
        </div>


    )
}

export default MobileMenu