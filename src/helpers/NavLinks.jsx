const links = ['about', 'skills', 'contact']
const navLinks = (col, clicked) => {
  const handleClick = () => {
    if (clicked) {
      clicked()
    }
  }
  return links.map((link, index) => {
    return (
      <a key={index} onClick={handleClick}
      className={`${col ? 'flex flex-col items-center': ''} text-textColor hover:text-primaryColor text-lg font-mono`} 
      href={`#${link}`}>
        <span className='text-primaryColor'>0{index+1}. </span>
        <span className='capitalize'>{link}</span>
      </a>
    )
  })
}

export { navLinks }