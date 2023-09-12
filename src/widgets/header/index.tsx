import {links} from '@/widgets/header/lib/constants'
import Wrap from '@/shared/ui/wrap'
import Menu from './ui/menu'
import Icon from '@/shared/svg'

import cl from './style.module.scss'
import Link from 'next/link'

const Header = () => (
  <Wrap>
    <div className={cl.header}>
      <div className={cl.navigation}>
        <div>
          <Link href="/">
            <Icon name="logo" className={cl.logo}/>
          </Link>
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
          <Icon name="phone" className={cl.svg}/>
          <div>
            <h4 className={cl.title}>Call us</h4>
            <p className={cl.text}>(405) 555-0128</p>
          </div>
        </div>

        <div className={cl.contact}>
          <Icon name="chat" className={cl.svg}/>
          <div>
            <h4 className={cl.title}>Talk to us</h4>
            <p className={cl.text}>hello@createx.com</p>
          </div>
        </div>
      </div>

      <div className={cl.menu}>
        <Menu/>
      </div>
    </div>
  </Wrap>
)

export default Header
