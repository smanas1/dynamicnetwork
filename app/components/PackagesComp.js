import React from "react";
import { FaWifi } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";
import Image from "next/image";
import taka from "../../public/taka.png";
import ayna from "../../public/ayna.png";
import Link from "next/link";

const PackagesComp = ({ map }) => {
  return (
    <div className="flex justify-center  gap-10 flex-wrap">
      {map.map((item, i) => (
        <div
          key={i}
          className="py-9 flex flex-col justify-between px-11 rounded-md bg-white shadow-lg"
        >
          <div>
            <h3 className="text-[28px] font-semibold">{item.name}</h3>
            <div className="flex justify-center items-center rounded-md bg-[#F7F5FF] mt-5  py-4 px-3">
              <div className="me-4">
                <FaWifi size={36} />
              </div>
              <div>
                <h4 className="text-[28px] font-semibold pe-6 ">
                  {item.mbps} Mbps
                </h4>
              </div>
            </div>
            {/* List */}
            <div className="my-5">
              <ul>
                {item.featers.map((item) => (
                  <li
                    key={item.title}
                    className="flex my-4 gap-4 text-base
                                            font-medium items-center"
                  >
                    <FaCheckCircle className="text-blue-600" size={20} />{" "}
                    {item.title}
                  </li>
                ))}
                {item.ott && (
                  <li
                    className="flex  gap-4 text-red-600 text-base
                                            font-medium items-center"
                  >
                    <FaCheckCircle className="text-red-600" size={20} /> Free
                    Ayna OTT
                  </li>
                )}
                {item.ott && (
                  <div className="flex mt-5 justify-center items-center">
                    <Image src={ayna} alt="ayna" width={60} />
                  </div>
                )}
              </ul>
            </div>
          </div>
          {/* Button */}
          <div className="flex  flex-col justify-center">
            <div className="flex mb-3 justify-center items-center">
              <Image src={taka} alt="taka" width={40} />
              <h3 className="-ml-1 text-3xl font-semibold">
                {item.price}{" "}
                <span className="text-xl text-gray-700 font-medium">
                  / Month
                </span>
              </h3>
            </div>

            <Link href="/contactus">
              <button className="bg-blue-600 text-white py-3  w-full hover:bg-blue-700 transition-all px-7 rounded-lg font-semibold text-base">
                Buy Package
              </button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PackagesComp;
