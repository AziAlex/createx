import Icon from '@/shared/svg'
import { footerIcons } from '@/widgets/footer/lib/constants'
import SuscrbeForm from '@/widgets/footer/ui/form'

import styles from './style.module.scss'

export const FooterTop = () => (
  <div className={styles.top}>
    <div className={styles.left}>
      <Icon name='logo' className={styles.logo} />
      <ul>
        {footerIcons.map((icon, index) => (
          <li key={index}>
            <a href='#'><Icon name={icon} className={styles.icon} /></a>
          </li>
        ))}
      </ul>
      <p>Createx Construction Bureau has been successfully operating in the USA construction market since 2000. We
        are proud to offer you quality construction and exemplary service. Our mission is to set the highest
        standards for construction sphere.</p>
    </div>
    <div className={styles.right}>
      <h4>Let’s stay in touch</h4>
      <SuscrbeForm />
      <p>*Subscribe to our newsletter to receive communications and early updates from Createx Construction Bureau.</p>
    </div>
  </div>
)