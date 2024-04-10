import Image from "next/image";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <div className="w-full h-screen bg-[#0E1527] con">
      <div className="container">
        <Hero />
      </div>
    </div>
  );
}
