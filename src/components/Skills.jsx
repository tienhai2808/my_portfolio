import { SkillInfo } from '../helpers/User'
import SkillCard from './SkillCard'

const Skills = () => {
  return (
    <div id='skills' className='px-16 mx-20 xl-mx:mx-10 bs-mx:mx-5 md-mx:mx-0 my-5 pt-10 font-mono xs-mx:px-3'>
      <h1 className='text-4xl sm-mx:text-3xl xs-mx:text-2xl mb-5 font-bold text-white'>
        <span className='text-primaryColor'>02.&nbsp;</span>Skills
      </h1>
      <div className='flex flex-wrap gap-5 justify-around md-mx:justify-center sm-mx:justify-center'>
      {
        SkillInfo.map((skill, index) => <SkillCard key={index} title={skill.title} skills={skill.skills}/>)
      }
      </div>
    </div>
  )
}

export default Skills