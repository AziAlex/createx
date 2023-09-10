import { footerAddress, footerLinks } from '@/widgets/footer/lib/constants'

import styles from './style.module.scss'

export const FooterMain = () => (
  <div className={styles.main}>
    <ul>
      {footerAddress.map((item, index) => (
        <li key={index}>{item[0]} <span>{item[1]}</span></li>
      ))}
    </ul>
    {footerLinks.map((item, index) => (
      <ul key={index}>
        {item.map((item, index) => (
          <li key={index}><span>{item}</span></li>
        ))}
      </ul>
    ))}
  </div>
)