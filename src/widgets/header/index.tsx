'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'

import { links } from '@/widgets/header/lib/constants'
import Wrap from '@/shared/ui/wrap'
import Menu from './ui/menu'
import Icon from '@/shared/svg'

import styles from './style.module.scss'

const Header = () => {
  const pathName = usePathname()

  return (
    <Wrap>
      <div className={styles.header}>
        <div className={styles.navigation}>
          <div>
            <Link href='/'>
              <Icon name='logo' className={styles.logo} />
            </Link>
          </div>

          <nav>
            <ul>
              {links.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className={pathName === link.href ? styles.active : ''}
                  >{link.name}</a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className={styles.contacts}>
          <div className={styles.contact}>
            <Icon name='phone' className={styles.svg} />
            <div>
              <h4 className={styles.title}>Call us</h4>
              <p className={styles.text}>(405) 555-0128</p>
            </div>
          </div>

          <div className={styles.contact}>
            <Icon name='chat' className={styles.svg} />
            <div>
              <h4 className={styles.title}>Talk to us</h4>
              <p className={styles.text}>hello@createx.com</p>
            </div>
          </div>
        </div>

        <div className={styles.menu}>
          <Menu />
        </div>
      </div>
    </Wrap>
  )
}

export default Header
