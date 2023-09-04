import { IconPhone } from '@/shared/svg/Icon'
import { IconChat } from '@/shared/svg/ui/IconChat'
import { IconLogo } from '@/shared/svg/ui/IconLogo'
import { links } from '@/widgets/header/lib/constants'

import cl from './styles.module.scss'
import Wrap from '@/shared/ui/wrap'
import { Menu } from './shared/menu'

const header = () => {
  return (
    <Wrap>
      <div className={cl.header}>
        <div className={cl.navigation}>
          <div>
            <IconLogo className={cl.logo} />
          </div>

          <nav>
            <ul>
              {links.map((link) => (
                <li key={link.name}>
                  <a href={link.href}>{link.name}</a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className={cl.contacts}>
          <div className={cl.contact}>
            <IconPhone className={cl.icon} />
            <div>
              <h4 className={cl.title}>Call us</h4>
              <p className={cl.text}>(405) 555-0128</p>
            </div>
          </div>

          <div className={cl.contact}>
            <IconChat className={cl.icon} />
            <div>
              <h4 className={cl.title}>Talk to us</h4>
              <p className={cl.text}>hello@createx.com</p>
            </div>
          </div>
        </div>
        
        <div className={cl.menu}>
          <Menu />
        </div>
      </div>
    </Wrap>
  )
}

export default header
