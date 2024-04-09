import Image from 'next/image'
import logo from '../../public/logo.png';
import Link from 'next/link';
const Menu = () => {
    return (
        <div className="container py-5 flex justify-between items-center">
            {/* Logo */}
            <div>
                <Image src={logo} alt='logo' height={50} width={50} />
            </div>
            {/* Menu */}
            <div className='w-1/4 justify-between flex relative'>
                <Link className='nav-item' href="#">Home</Link>
                <Link className='nav-item' href="#">Packages</Link>
                <Link className='nav-item' href="#">FTP</Link>
                <Link className='nav-item' href="#">About US</Link>
            </div>
            {/* Contact */}
            <button>Contact</button>
        </div>
    )
}

export default Menu