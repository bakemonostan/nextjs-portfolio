import { AiOutlineMail } from 'react-icons/ai';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs';

const Main = () => {
  return (
    <div className='w-full h-screen text-center'>
      <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
        <div>
          <p className='uppercase text-sm tracking-widest text-gray-600'>
            Let&apos;s build something together
          </p>
          <h1 className='py-4 text-gray-700'>
            Hi I&apos;m <span className='text-[#5651e5]'>Ehiz</span>
          </h1>
          <h2 className='py-2 text-gray-700 text-6xl'>
            A Front-End Web Developer
          </h2>
          <p className='py-4 text-gray-600 m-auto max-w-[70%]'>
            I am a front-end web developer specializing in building exceptional
            and scalable digital experience. Currently, I am focused on building
            responsive front-end web applications while learning back-end
            technologies.
          </p>
          <div className='flex items-center justify-between m-auto py-4 max-w-[330px]'>
            <div className='rounded-full text-[#5651e5] shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-200'>
              <FaLinkedinIn />
            </div>
            <div className='rounded-full text-[#5651e5] shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-200'>
              <FaGithub />
            </div>
            <div className='rounded-full text-[#5651e5] shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-200'>
              <AiOutlineMail />
            </div>
            <div className='rounded-full text-[#5651e5] shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-200'>
              <BsFillPersonLinesFill />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Main;
