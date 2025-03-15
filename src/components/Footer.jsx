import React from 'react'
import { Info } from '../helpers/User'
import { socialIcons } from '../helpers/SocialLinks'

const Footer = () => {
  return (
    <div className='px-16 bs-mx:px-0 mx-20 bs-mx:mx-10 font-mono mt-20 mb-10'>
      <div className='text-3xl md-mx:text-2xl text-primaryColor font-semibold'>{Info.name}</div>
      <div className='xs-mx:flex text-textColor justify-center gap-3 hidden'>{socialIcons(true)}</div>
      <div className='mt-2 text-xl md-mx:text-lg sm-mx:text-base xs-mx:text-sm sm-mx:flex sm-mx:flex-col sm-mx:items-center text-textColor'>Copyright &copy; {new Date().getFullYear()} {Info.name} <span className='sm-mx:hidden'>|</span> <span>All Rights Reserved</span></div>
    </div>
  )
}

export default Footer