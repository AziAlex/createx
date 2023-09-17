import styles from './style.module.scss'
import { FC } from 'react'

interface StageItemProps {
  title: string
  description: string
  stage: number
}

const StageItem: FC<StageItemProps> = ({ stage, title, description }) => (
  <li className={styles.wrap}>
    <h3>{title}</h3>
    <p>{description}</p>
  </li>
)

export default StageItem
