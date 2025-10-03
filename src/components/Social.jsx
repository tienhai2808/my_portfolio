import { socialIcons } from '../helpers/SocialLinks'

const Social = () => {
  return (
    <div className='xs-mx:hidden flex items-center gap-11 text-textColor fixed bottom-44 -left-[11.7rem] rotate-90'>
      {socialIcons(false)}
      <hr className='border-[2px] w-40 rounded-full bg-textColor border-textColor' />
    </div>
  )
}

export default Social