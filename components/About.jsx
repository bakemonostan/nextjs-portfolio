const About = () => {
  return (
    <div className='w-full p-2 flex items-center'>
      <div className='max-w-[1240px] m-auto md:grid grid-col-3 gap-8'>
        <div className='col-span-2'>
          <h2 className='text-2xl uppercase tracking-widest text-[#5651e5]'>
            About
          </h2>
          <p className='py-4 font-bold text-4xl'>Who I Am</p>
          <p className='py-2 text-gray-600'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda
            animi laborum eum cupiditate sint quidem! Accusantium aliquid magni
            voluptas omnis ipsa vero doloribus consequatur qui rerum
            repellendus, ipsam, perspiciatis soluta facilis nemo dolor quia
            officia blanditiis, nihil eos beatae. Asperiores tenetur distinctio
            magni accusantium ullam nesciunt, neque ex accusamus ad!
          </p>
          <p className='py-2 text-gray-600'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore
            nesciunt, autem pariatur assumenda dolorem molestiae unde deleniti.
            Sunt, rem libero ullam non, adipisci animi officia odio cumque
            nostrum, necessitatibus maiores nesciunt? Voluptate animi hic
            ducimus, aspernatur dicta, possimus tenetur dolore sed facere
            excepturi sit? Quae voluptatum sequi ab iste itaque?
          </p>
          <p className='py-2 text-gray-600 underline cursor-pointer'>
            Check out some of my latest projects.
          </p>
        </div>
      </div>
    </div>
  );
};
export default About;
