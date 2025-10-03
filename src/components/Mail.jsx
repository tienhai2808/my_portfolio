const Mail = () => {
  return (
    <div className='xs-mx:hidden flex items-center gap-11 text-textColor fixed bottom-44 -right-[10.4rem] rotate-90'>
      <a href='mailto:tienhai2808@gmail.com' 
      className='font-mono text-lg hover:text-primaryColor hover:!-translate-x-2 transform duration-300 ease-in-out'
      data-aos='fade-up-left'>
        tienhai2808@gmail.com
      </a>
      <hr className='border-[2px] w-40 rounded-full bg-textColor border-textColor'/>
    </div>
  )
}

export default Mail