import { FC } from 'react'

import styles from './style.module.scss'
import clsx from 'clsx'

type TProps = {
  title: string
  subtitle: string
  theme?: 'white'
}

const TitleBlock: FC<TProps> = ({ title, subtitle, theme }) => (
  <div
    className={clsx(styles.container, { [styles.white]: theme === 'white' })}
  >
    <h2 className={styles.title}>{title}</h2>
    <p className={styles.subtitle}>{subtitle}</p>
  </div>
)

export default TitleBlock
