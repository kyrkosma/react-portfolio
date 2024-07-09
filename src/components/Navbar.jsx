import React, {useState} from 'react';
import Logo from '../assets/logo.png'
import {FaBars, FaTimes, FaGithub, FaLinkedin} from 'react-icons/fa';
import {HiOutlineMail} from 'react-icons/hi';
import {BsFillPersonLinesFill} from 'react-icons/bs';
import {Link} from 'react-scroll';
import MyCV from '../assets/myCV.pdf'

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)

    return (
        <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
            <div className='z-10'>
                <img src={Logo} alt='Logo Image' style={{height: '50px'}}/>
            </div>

            {/* Menu */}
            <ul className='hidden md:flex'>
                <li>
                    <Link activeClass='active' to='home' smooth={true} duration={500}>Home</Link>
                </li>
                <li>
                    <Link activeClass='active' to='about' smooth={true} duration={500}>About</Link>
                </li>
                <li>
                    <Link activeClass='active' to='experience' smooth={true} duration={500}>Experience</Link>
                </li>
                <li>
                    <Link activeClass='active' to='contact' smooth={true} duration={500}>Contact</Link>
                </li>
            </ul>

            {/* Hamburger */}
            <div onClick={handleClick} className='md:hidden z-10'>
                {!nav ? <FaBars className='hover:cursor-pointer'/> : <FaTimes className='hover:cursor-pointer'/>}
            </div>

            {/* Mobile menu */}
            <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
                <li className='py-6 text-4xl'>
                    <Link onClick={handleClick} activeClass='active' to='home' smooth={true} duration={500}>Home</Link>
                </li>
                <li className='py-6 text-4xl'>
                    <Link onClick={handleClick} activeClass='active' to='about' smooth={true} duration={500}>About</Link>
                </li>
                <li className='py-6 text-4xl'>
                    <Link onClick={handleClick} activeClass='active' to='experience' smooth={true} duration={500}>Experience</Link>
                </li>
                <li className='py-6 text-4xl'>
                    <Link onClick={handleClick} activeClass='active' to='contact' smooth={true} duration={500}>Contact</Link>
                </li>
            </ul>

            {/* Social icons */}
            <div className='hidden lg:flex fixed flex-col top-[40%] left-0'>
                <ul>
                    <li className='w-[160px] h-[60px] flex ml-[-100px] hover:ml-[-10px] duration-300 bg-[#0A66C2]'>
                        <a className='flex justify-between items-center w-full' href='https://www.linkedin.com/in/kyrkos-marios/' target='blank'>
                            LinkedIn <FaLinkedin size={30}/>
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex ml-[-100px] hover:ml-[-10px] duration-300 bg-[#2B3137]'>
                        <a className='flex justify-between items-center w-full' href='https://github.com/kyrkosma' target='blank'>
                            GitHub <FaGithub size={30}/>
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex ml-[-100px] hover:ml-[-10px] duration-300 bg-emerald-600'>
                        <a className='flex justify-between items-center w-full' href='mailto:kyrkosma@gmail.com'>
                            Email <HiOutlineMail size={30}/>
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex ml-[-100px] hover:ml-[-10px] duration-300 bg-cyan-700'>
                        <a className='flex justify-between items-center w-full' download={MyCV} href={MyCV}>
                            Resume <BsFillPersonLinesFill size={30}/>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar;