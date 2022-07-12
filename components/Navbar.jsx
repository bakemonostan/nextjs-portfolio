import Image from 'next/image';
import Link from 'next/link';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
  return (
    <>
      <div className='w-full fixed  shadow-xl z-[100] p-2'>
        <div className='flex justify-between items-center w-full h-full px-2 2xl:px-6'>
          <Image
            src='/../public/assets/ehizLogo.png'
            alt='/'
            width='120'
            height='80'
          />
          <ul className='hidden md:flex'>
            <Link href='/'>
              <li className='ml-10 text-sm uppercase hover:border-b'>Home</li>
            </Link>
            <Link href='/'>
              <li className='ml-10 text-sm uppercase hover:border-b'>About</li>
            </Link>
            <Link href='/'>
              <li className='ml-10 text-sm uppercase hover:border-b'>Skills</li>
            </Link>
            <Link href='/'>
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
          <div className='cursor-pointer md:hidden'>
            <AiOutlineMenu size={40} />
          </div>
        </div>
      </div>

      <div className='fixed left-0 top-0 w-full h-screen bg-black/70 z-[100]'>
        <div className='fixed left-0 top-0 h-screen w-[75%] sm:w-[60%] md:w-[45%] bg-[#ecf0f3] p-5 ease-in duration-500'>
          <div className='flex w-full items-center justify-between'>
            <Image
              src='/../public/assets/ehizLogo.png'
              alt='/'
              width='90'
              height='60'
            />
            <div className='rounded-full shadow-lg shadow-gray-600 p-1 cursor-pointer'>
              <AiOutlineClose size={30} />
            </div>
          </div>
          <div className='border-b border-gray-300 my-6'>
            <p>Let&apos;s build something cool together</p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Navbar;
