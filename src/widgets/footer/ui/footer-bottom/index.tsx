'use client'

import Icon from '@/shared/svg'
import styles from './style.module.scss'

export const FooterBottom = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <div className={styles.bottom}>
      <p>
        © All rights reserved. Made with
        <Icon name='heart' className={styles.icon} />
        by Createx Studio
      </p>
      <div className={styles.goTop}>
        <span>GO TO TOP</span>
        <button onClick={scrollToTop}>
          <Icon name='chevronsTop' className={styles.icon} />
        </button>
      </div>
    </div>
  )
}