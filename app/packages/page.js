import React from "react";
import PackagesComp from "../components/PackagesComp";
import { packageData } from "../components/data/packageData";

const Packages = () => {
  return (
    <div className="bg-[#F7F5FF] pt-20 py-8 md:py-28 ">
      <div className="container">
        <div className="flex flex-col  items-center">
          <h2 className="text-center text-3xl md:text-5xl font-bold">
            Choose your package
          </h2>
          <p className="hidden md:block md:w-[32rem] text-center mt-9">
            Chose a perfect package for you by considering your requirements,
            data limit and internet speed.
          </p>
        </div>
        <div className="my-10 flex justify-center">
          <div className="max-w-5xl">
            <PackagesComp map={packageData} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Packages;
