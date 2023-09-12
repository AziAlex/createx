import { FC } from 'react'

import styles from './style.module.scss'

type TProps = {
  title: string
  text: string
}

const TitleBlock: FC<TProps> = ({ title, text }) => (
  <div className={styles.title__block}>
    <h2 className={styles.title}>{title}</h2>
    <p className={styles.text}>{text}</p>
  </div>
)

export default TitleBlock
