import React from 'react'
import { Info } from '../helpers/User'
import TypeWrite from 'typewriter-effect'
import { Button, useMatches } from '@mantine/core'
import ViewResume from './ViewResume'
import { useDisclosure } from '@mantine/hooks'
import { IconDownload } from '@tabler/icons-react'
import Particles from './magicui/Particles'
import NeonGradientCard from './magicui/neo-gradient-card'

const About = () => {
  const [opened, { open, close }] = useDisclosure(false)
  const btn = useMatches({
    xs: 'xs',
    sm: 'sm',
    md: 'md',
    lg: 'lg',
  })

  return (
    <>
      <div className='flex mt-28 xs-mx:mt-20 relative px-16 justify-around items-center overflow-hidden min-h-[85vh] font-mono lg-mx:justify-between bs-mx:pt-10 bs-mx:pb-3 bs-mx:justify-center bs-mx:flex-col-reverse bs-mx:gap-5 xs-mx:px-6 xsm-mx:px-3' 
      id='about'
      data-aos="fade-up">
      <Particles
        className="absolute inset-0 -z-20"
        quantity={1000}
        ease={80}
        color='#8cf8f8'
        vx={.1}
        vy={.1}
        refresh
      />
        <div className='ml-20 w-3/5 flex flex-col lg-mx:gap-1 xl-mx:ml-10 bs-mx:items-center bs-mx:ml-0 bs-mx:w-full'>
          <div className='text-3xl text-primaryColor text-left xl-mx:text-[28px] lg-mx:text-2xl sm-mx:text-xl xs-mx:text-[18px] xsm-mx:text-base'>Hi, I am</div>
          <div className='text-white text-[4.25rem] text-left font-extrabold xl-mx:text-[58px] lg-mx:text-5xl sm-mx:text-3xl xs-mx:text-2xl xsm-mx:text-[22px]'>{Info.name}</div>
          <div className='text-white text-4xl flex flex-start xl-mx:text-[30px] lg-mx:text-[27px] sm-mx:text-2xl xs-mx:text-xl xsm-mx:text-[18px]'>I'm a&nbsp;
            <span className='text-primaryColor font-semibold'>
              <TypeWrite
              options={{
                strings: Info.stack, 
                autoStart: true, 
                loop: true,
              }}/>
            </span>
          </div>
          <div className='my-8 lg-mx:my-1 text-textColor text-justify w-[90%] text-xl font-semibold xl-mx:text-[18px] lg-mx:text-base xs-mx:text-[15px]'>{Info.bio}</div>
          <div className='flex flex-start gap-5'>
            <Button onClick={open} className='!text-bgColor' size={btn} variant='filled' color='#8cf8f8'>Check Resume</Button>
            <Button className='!text-primaryColor' size={btn} variant='outline' color='#8cf8f8'
            rightSection={<IconDownload className='w-[20px] h-[20px] md-mx:h-[18px] md-mx:w-[18px] xs-mx:h-[16px] xs-mx:w-[16px]'/>}
            component='a' href='my_resume.pdf' download={Info.name}>
              Download
            </Button>
          </div>
        </div>
        <div className='flex justify-center items-center h-fit w-fit mr-20 rounded-full xl-mx:mr-10 bs-mx:mr-0 bs-mx:w-full'>
        <NeonGradientCard className="h-[325px] w-[325px] lg-mx:w-64 lg-mx:h-64 sm-mx:w-56 sm-mx:h-56 xsm-mx:h-44 xsm-mx:w-44 max-w-sm items-center justify-center text-center">
          <img className='w-full h-full rounded-full' src="profile_photo.jpg" alt="profilePhoto" /> 
        </NeonGradientCard>
        </div>
      </div>
      <ViewResume opened={opened} close={close}/>
    </>
  )
}

export default About