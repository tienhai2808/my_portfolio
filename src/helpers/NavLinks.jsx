import { Link } from 'react-scroll';

const links = ['about', 'skills', 'projects', 'contact']
const navLinks = (col, clicked) => {
  const handleClick = () => {
    if (clicked) {
      clicked()
    }
  }
  return links.map((link, index) => {
    return (
      <Link
        key={index}
        to={link} 
        spy={true}
        smooth={true} 
        offset={-41.5} 
        duration={500} 
        onClick={handleClick}
        className={`${col ? 'flex flex-col items-center' : ''} cursor-pointer text-textColor hover:text-primaryColor text-lg font-mono`}
      >
        <span className='text-primaryColor'>0{index+1}. </span>
        <span className='capitalize'>{link}</span>
      </Link>
    )
  })
}

export { navLinks }