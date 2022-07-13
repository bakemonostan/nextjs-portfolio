import ProjectItem from './ProjectItem';

const Projects = () => {
  return (
    <div className='w-full'>
      <div className=' max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl uppercase tracking-widest text-[#5651e5]'>
          Projects
        </p>
        <h2 className='py-4'>What I have Built</h2>
        <div className='grid md:grid-cols-2 gap-8'>
          <ProjectItem />
          <ProjectItem />
          <ProjectItem />
          <ProjectItem />
        </div>
      </div>
    </div>
  );
};
export default Projects;
