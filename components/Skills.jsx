import Image from 'next/image';

const Skills = () => {
  return (
    <div className='w-full p-2 my-[12rem]' id='skills'>
      <div className='max-w-[1240p] mx-auto flex flex-col justify-center h-full'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
          Skills
        </p>
        <h2 className='py-6'>Technologies I use</h2>
        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
          <div className='py-6 rounded-xl shadow-2xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image
                  src='/../public/assets/skills/html.png'
                  alt='/'
                  width='64px'
                  height='64px'
                />
              </div>
              <div className='flex flex-col items-center justify-center'>
                HTML
              </div>
            </div>
          </div>
          <div className='py-6 rounded-xl shadow-2xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image
                  src='/../public/assets/skills/css.png'
                  alt='/'
                  width='64px'
                  height='64px'
                />
              </div>
              <div className='flex flex-col items-center justify-center'>
                CSS
              </div>
            </div>
          </div>
          <div className='py-6 rounded-xl shadow-2xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image
                  src='/../public/assets/skills/javascript.png'
                  alt='/'
                  width='64px'
                  height='64px'
                />
              </div>
              <div className='flex flex-col items-center justify-center'>
                Javascript
              </div>
            </div>
          </div>
          <div className='py-6 rounded-xl shadow-2xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image
                  src='/../public/assets/skills/react.png'
                  alt='/'
                  width='64px'
                  height='64px'
                />
              </div>
              <div className='flex flex-col items-center justify-center'>
                React
              </div>
            </div>
          </div>
          <div className='py-6 rounded-xl shadow-2xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image
                  src='/../public/assets/skills/tailwind.png'
                  alt='/'
                  width='64px'
                  height='64px'
                />
              </div>
              <div className='flex flex-col items-center justify-center'>
                Tailwind Css
              </div>
            </div>
          </div>
          <div className='py-6 rounded-xl shadow-2xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image
                  src='/../public/assets/skills/firebase.png'
                  alt='/'
                  width='64px'
                  height='64px'
                />
              </div>
              <div className='flex flex-col items-center justify-center'>
                Firebase
              </div>
            </div>
          </div>
          <div className='py-6 rounded-xl shadow-2xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image
                  src='/../public/assets/skills/github1.png'
                  alt='/'
                  width='64px'
                  height='64px'
                />
              </div>
              <div className='flex flex-col items-center justify-center'>
                Github
              </div>
            </div>
          </div>
          <div className='py-6 rounded-xl shadow-2xl hover:scale-105 ease-in duration-300'>
            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
              <div className='m-auto'>
                <Image
                  src='/../public/assets/skills/mongo.png'
                  alt='/'
                  width='64px'
                  height='64px'
                />
              </div>
              <div className='flex flex-col items-center justify-center'>
                MongoDb
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Skills;
