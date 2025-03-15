import React from 'react'
import { SkillBadge } from '../helpers/SkillBadge'

const SkillCard = (props) => {
  return (
    <div data-aos='zoom-in-up' className='w-[48%] xl-mx:w-[47%] md-mx:w-[80%] shadow-[0_0_10px_0_#8cf8f8] border rounded-2xl border-primaryColor p-5 bs-mx:p-3 xs-mx:w-[90%]'>
      <div className='text-3xl mb-4 text-white text-center font-bold sm-mx:text-2xl xs-mx:text-xl'>{props.title}</div>
      <div className='flex flex-wrap bs-mx:gap-2 gap-3 justify-center'>
        {SkillBadge(props.skills)}
      </div>
    </div>
  )
}

export default SkillCard