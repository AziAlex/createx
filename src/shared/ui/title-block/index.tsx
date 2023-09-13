import { FC } from 'react'

import styles from './style.module.scss'
import clsx from 'clsx'

type TProps = {
  title: string
  subtitle: string
  darkTheme?: boolean
}

const TitleBlock: FC<TProps> = ({ title, subtitle, darkTheme }) => {
  console.log(darkTheme)
  return (
    <div
      className={clsx(styles.container, { [styles.darkTheme]: darkTheme })}
    >
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.subtitle}>{subtitle}</p>
    </div>
  )
}

export default TitleBlock
