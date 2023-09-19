import { FC } from 'react'

import styles from './style.module.scss'

interface StageItemProps {
  title: string
  description: string
}

const StageItem: FC<StageItemProps> = ({ title, description }) => (
  <li className={styles.wrap}>
    <h3>{title}</h3>
    <p>{description}</p>
  </li>
)

export default StageItem
