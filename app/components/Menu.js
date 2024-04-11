import Image from "next/image";
import logo from "../../public/logo.svg";
import Link from "next/link";
import MobileMenu from "./MobileMenu";
import { menuData } from "../data";
const Menu = () => {

  return (
    <div className="bg-[#0E1527] border-b border-genarel fixed w-full z-10" >
      {/* Thsi is for pv */}
      <div className="container  flex justify-between items-center max-lg:hidden lg:visible">
        {/* Logo */}
        <div>
          <Link href='/'>
            <Image src={logo} alt="logo" height={200} width={200} />
          </Link>
        </div>
        {/* Menu */}
        <div className="max-xl:w-[40%] xl:w-[30%] justify-between flex relative">

          {menuData.map((item, i) => (
            <Link key={i} className="nav-item" href={item.link}>
              {item.title}
            </Link>
          ))}
        </div>
        {/* Contact */}
        <div>
          {/* <CallIcon /> */}
          <button className="py-2 px-6 font-semibold rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-all hover:rounded-sm"><Link href='/contactus'>Call Now</Link></button>
        </div>
      </div>
      {/* Thsi is for Mobile */}

      <div className="visible lg:hidden">
        <MobileMenu />
      </div>

    </div>
  );
};

export default Menu;
