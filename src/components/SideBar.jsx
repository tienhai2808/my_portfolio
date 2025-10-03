import { useDisclosure } from '@mantine/hooks';
import { Drawer, Burger } from '@mantine/core';
import { navLinks } from '../helpers/NavLinks';
import { useMediaQuery } from '@mantine/hooks'
import { em } from '@mantine/core'

const SideBar = () => {
  const isMobile = useMediaQuery(`(max-width: ${em(476)})`)
  const [opened, { toggle }] = useDisclosure(false);
  return (
    <>
      <Drawer.Root className='bs:hidden !-z-10' position='right' opened={opened} onClose={toggle} size="45vw">
        <Drawer.Overlay className='!-z-0' style={{backgroundOpacity: 0.5, blur: 4}} />
        <Drawer.Content className='!-z-0' bg='#0f172a'>
          <Drawer.Body className='mt-32 flex flex-col gap-8' bg='#0f172a'>
            {navLinks(true, toggle)}
          </Drawer.Body>
        </Drawer.Content>
      </Drawer.Root>

      <Burger className='bs:!hidden !z-10' size={isMobile ? 30 : 44} color='#8cf8f8' opened={opened} onClick={toggle}  />
    </>
  )
}

export default SideBar