import { IconPhone } from '@/shared/svg/Icon'
import { IconChat } from '@/shared/svg/ui/IconChat'
import { IconLogo } from '@/shared/svg/ui/IconLogo'

import styles from './header.module.scss'
import clsx from 'clsx'

type Link = {
  name: string
  href: string
}

const links: Link[] = [
  {
    name: 'About Us',
    href: '/about',
  },
  {
    name: 'Services',
    href: '/services',
  },
  {
    name: 'Work',
    href: '/work',
  },
  {
    name: 'News',
    href: '/news',
  },
  {
    name: 'Contacts',
    href: '/contacts',
  },
]

const header = () => {
  return (
    <div className={clsx(styles.header, 'container')}>
      <div className={styles.navigation}>
        <div>
          <IconLogo className={styles.logo} />
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

      <div className={styles.contacts}>
        <div className={styles.contact}>
          <IconPhone className={styles.icon} />
          <div>
            <h4 className={styles.title}>Call us</h4>
            <p className={styles.text}>(405) 555-0128</p>
          </div>
        </div>

        <div className={styles.contact}>
          <IconChat className={styles.icon} />
          <div>
            <h4 className={styles.title}>Talk to us</h4>
            <p className={styles.text}>hello@createx.com</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default header
