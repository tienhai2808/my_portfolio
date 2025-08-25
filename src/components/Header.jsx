import { useState, useEffect } from 'react'
import { IconHexagonLetterH } from '@tabler/icons-react'
import SideBar from './SideBar'
import { navLinks } from '../helpers/NavLinks'
import { useMediaQuery } from '@mantine/hooks'
import { em } from '@mantine/core'

const Header = () => {
  const isMobile = useMediaQuery(`(max-width: ${em(476)})`)
  const [show, setShow] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [shadow, setShadow] = useState(false)
  const [disableScroll, setDisableScroll] = useState(false);

  const controlNavbar = () => {
    if (disableScroll) return;

    if (window.scrollY > lastScrollY && window.scrollY > 70) {
      setShow(false)
    } else {
      setShow(true)
    }
    if (window.scrollY > 70) {
      setShadow(true)
    } else {
      setShadow(false)
    }
    setLastScrollY(window.scrollY)
  }

  useEffect(() => {
    window.addEventListener('scroll', controlNavbar)
    return () => {
      window.removeEventListener('scroll', controlNavbar)
    }
  })

  return (
    <div className={`flex ${show ? 'translate-y-0' : '-translate-y-28'} ${shadow ? 'shadow-[0px_10px_30px_-10px_#020c1b]' : ''} transition-transform duration-500 ease-in-out fixed w-full top-0 z-10 justify-between items-center h-28 bg-bgColor font-mono px-10 xs-mx:px-4 xs-mx:h-20`}>
      <IconHexagonLetterH className='!z-10' size={isMobile ? 45 : 60} color='#8cf8f8' stroke={1.25}/>
      <div className='bs:flex gap-8 hidden'>
        {navLinks(false, () => {
          setShow(false);
          setDisableScroll(true);
          setTimeout(() => setDisableScroll(false), 500);
        })}
      </div>
      <SideBar />
    </div>
  )
}

export default Header