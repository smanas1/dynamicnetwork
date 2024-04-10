import Image from "next/image";
import logo from "../../public/logo.svg";
import Link from "next/link";
import CallIcon from "./CallIcon";
import MobileMenu from "./MobileMenu";
import { menuData } from "../data";
const Menu = () => {

  return (
    <div className="bg-[#0E1527] border-b border-genarel">
      {/* Thsi is for pv */}
      <div className="container  flex justify-between items-center max-lg:hidden lg:visible">
        {/* Logo */}
        <div>
          <Image src={logo} alt="logo" height={200} width={200} />
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
          <CallIcon />
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
