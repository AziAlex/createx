import { FC } from 'react'
import Icon from '@/shared/svg'
import { Card } from '../lib/constants'

import styles from './style.module.scss'

type TProps = {
  card: Card
}

const Card: FC<TProps> = ({ card }) => (
  <div className={styles.card}>
    <div className={styles.img__wrapper}>
      <Icon className={styles.icon} name={card.img} />
    </div>
    <h3>{card.title}</h3>
    <p className={styles.text}>{card.text}</p>
  </div>
)

export default Card
