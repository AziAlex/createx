import { links } from '../../lib/constants'
import Icon from '@/shared/svg'

import cl from './style.module.scss'

const Menu = () => (
  <nav className={cl.menu__container}>
    <input
      type="checkbox"
      id="menu"
      name="menu"
      className={cl.menu__checkbox}
    />
    <label className={cl.menu__toggle} htmlFor="menu">
      <Icon name="menu" className={cl.menu__icon} />
    </label>
    <label className={cl.menu__overlay} htmlFor="menu"></label>

    <div className={cl.menu}>
      <div className={cl.menu__header}>
        <label className={cl.menu__toggle} htmlFor="menu">
          <Icon name="close" className={cl.menu__icon} />
        </label>
        <span>MENU</span>
      </div>

      <ul>
        {links.map((link) => (
          <li key={link.name}>
            <label>
              <a href={link.href}>{link.name}</a>
            </label>
          </li>
        ))}
      </ul>
    </div>
  </nav>
)

export default Menu
