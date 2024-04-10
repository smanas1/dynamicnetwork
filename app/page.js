import Image from "next/image";
import Hero from "./components/Hero";
import ISP from "./components/ISP";

export default function Home() {
  return (
    <div className="">
      <div className="bg-[#0E1527]">
        <Hero />
      </div>
      <ISP />
    </div>
  );
}
