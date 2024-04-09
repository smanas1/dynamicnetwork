import Image from 'next/image'
import logo from '../../public/logo.svg';
import Link from 'next/link';
import CallIcon from './CallIcon';
const Menu = () => {
    return (
        <div className='bg-[#0E1527] border-b border-genarel'>
            <div className="container  flex justify-between items-center max-lg:hidden lg:visible">
                {/* Logo */}
                <div>
                    <Image src={logo} alt='logo' height={200} width={200} />
                </div>
                {/* Menu */}
                <div className='w-[30%] justify-between flex relative'>
                    <Link className='nav-item' href="#">Home</Link>
                    <Link className='nav-item' href="#">Packages</Link>
                    <Link className='nav-item' href="http://10.16.100.244/">FTP</Link>
                    <Link className='nav-item' href="#">About US</Link>
                </div>
                {/* Contact */}
                <div><CallIcon /></div>
            </div>
        </div>
    )
}

export default Menu