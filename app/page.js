import Image from "next/image";
import Hero from "./components/Hero";
import ISP from "./components/ISP";
import Packages from "./components/Packages";

export default function Home() {
  return (
    <div className="">
      <div className="bg-[#0E1527]">
        <Hero />
      </div>

      <ISP />
      <Packages />
    </div>
  );
}
