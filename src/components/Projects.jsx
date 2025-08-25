import { ProjectInfo } from '../helpers/User';
import ProjectCard from './ProjectCard';

const Projects = () => {
  return (
    <div id='projects' className='px-16 mx-20 xl-mx:mx-10 bs-mx:mx-5 md-mx:mx-0 my-5 pt-10 font-mono xs-mx:px-3'>
      <h1 className='text-4xl sm-mx:text-3xl xs-mx:text-2xl mb-5 font-bold text-white'>
        <span className='text-primaryColor'>03.&nbsp;</span>Projects
      </h1>
      <div className='flex flex-wrap gap-5 justify-start md-mx:justify-center sm-mx:justify-center'>
        {
          ProjectInfo.map((project, index) => (
            <ProjectCard 
            key={index} 
            title={project.title} 
            desc={project.desc} 
            image={project.image} 
            live={project.live} 
            link={project.link} 
            github={project.github} 
            technologies={project.technologies} 
            feCode={project.feCode} 
            beCode={project.beCode} />
          ))
        }
      </div>
    </div>
  )
}

export default Projects