import { FC } from 'react'
import clsx from 'clsx'

import styles from './style.module.scss'

type TProps = {
  title: string
  subtitle: string
  darkTheme?: boolean
}

const TitleBlock: FC<TProps> = ({ title, subtitle, darkTheme }) => (
  <div
    className={clsx(styles.container, { [styles.darkTheme]: darkTheme })}
  >
    <h2 className={styles.title}>{title}</h2>
    <p className={styles.subtitle}>{subtitle}</p>
  </div>
)

export default TitleBlock
