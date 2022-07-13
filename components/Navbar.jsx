import Image from 'next/image';
import Link from 'next/link';
import { AiOutlineClose, AiOutlineMenu, AiOutlineMail } from 'react-icons/ai';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { useState } from 'react';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className='w-full top-0 shadow-xl p-2 fixed z-[100] bg-slate-100'>
      <div className='flex justify-between items-center w-full h-full px-2 2xl:px-6'>
        <Image
          src='/../public/assets/ehizLogo.png'
          alt='/'
          width='120'
          height='80'
        />
        <div>
          <ul className='hidden md:flex'>
            <Link href='/'>
              <li className='ml-10 text-sm uppercase hover:border-b'>Home</li>
            </Link>
            <Link href='/#about'>
              <li className='ml-10 text-sm uppercase hover:border-b'>About</li>
            </Link>
            <Link href='/#skills'>
              <li className='ml-10 text-sm uppercase hover:border-b'>Skills</li>
            </Link>
            <Link href='/#projects'>
              <li className='ml-10 text-sm uppercase hover:border-b'>
                Projects
              </li>
            </Link>
            <Link href='/'>
              <li className='ml-10 text-sm uppercase hover:border-b'>
                Contact
              </li>
            </Link>
          </ul>
          <div className='cursor-pointer md:hidden' onClick={handleNav}>
            <AiOutlineMenu size={40} />
          </div>
        </div>
      </div>

      <div
        className={
          nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70 ' : ''
        }
      >
        <div
          className={
            nav
              ? 'fixed left-0 top-0 h-screen w-[75%] sm:w-[60%] md:w-[45%] bg-[#ecf0f3] p-5 ease-in duration-500'
              : 'fixed left-[-100%] top-0 h-screen  ease-in duration-500'
          }
        >
          <div className='flex w-full items-center justify-between'>
            <Image
              src='/../public/assets/ehizLogo.png'
              alt='/'
              width='90'
              height='60'
            />
            <div
              className='rounded-full shadow-lg shadow-gray-600 p-1 cursor-pointer'
              onClick={handleNav}
            >
              <AiOutlineClose size={30} />
            </div>
          </div>
          <div className='border-b border-gray-300 my-6'>
            <p className='w-[85%] md:w-[90%] py-4'>
              Let&apos;s build something cool together
            </p>
          </div>
          <div className='py-4 flex flex-col'>
            <ul className='uppercase pb-20'>
              <Link href='/'>
                <li className='py-5 text-sm'>Home</li>
              </Link>
              <Link href='/'>
                <li className='py-5 text-sm'>About</li>
              </Link>
              <Link href='/'>
                <li className='py-5 text-sm'>Skills</li>
              </Link>
              <Link href='/'>
                <li className='py-5 text-sm'>Projects</li>
              </Link>
              <Link href='/'>
                <li className='py-5 text-sm'>Contact</li>
              </Link>
            </ul>
            <div className='pt-40'>
              <p className='uppercase tracking-widest text-[#5651e5]'>
                Let&apos;s connect
              </p>
              <div className='flex items-center justify-between my-4 w-full'>
                <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                  <FaLinkedinIn />
                </div>
                <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                  <FaGithub />
                </div>
                <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                  <AiOutlineMail />
                </div>
                <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-200'>
                  <BsFillPersonLinesFill />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
