import { IconBrandGithub, IconBrandLinkedin, IconBrandInstagram, IconBrandFacebook } from '@tabler/icons-react'

const socialLinks = [{ link: 'https://github.com/tienhai2808', icon: IconBrandGithub },
{ link: 'https://linkedin.com/in/tienhai2808/', icon: IconBrandLinkedin },
{ link: 'https://facebook.com/hai.tan.288/', icon: IconBrandFacebook },
{ link: 'https://www.instagram.com/haict_08/', icon: IconBrandInstagram },
]
const socialIcons = (isFooter) => socialLinks.map((link) => {
  const Icon = link.icon;

  return (
    <a key={link.link} href={link.link} target='_blank' rel='noreferrer' className={`hover:text-primaryColor transform duration-300 ease-in-out ${isFooter ? 'hover:scale-100' : 'hover:!-translate-x-2'}`} {...(!isFooter ? { "data-aos": "fade-down-right" } : {})}>
      <Icon size={isFooter ? 25 : 30} className={isFooter ? "" : "-rotate-90"} />
    </a>
  )
})

export { socialIcons }
