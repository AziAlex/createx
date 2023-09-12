import { FC } from 'react'

import styles from './style.module.scss'

type TProps = {
  title: string
  subtitle: string
}

const TitleBlock: FC<TProps> = ({ title, subtitle }) => (
  <>
    <h2 className={styles.title}>{title}</h2>
    <p className={styles.subtitle}>{subtitle}</p>
  </>
)

export default TitleBlock
