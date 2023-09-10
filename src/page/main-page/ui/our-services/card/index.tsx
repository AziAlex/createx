import { FC } from 'react'
import { TCard } from '../lib/constants'
import Icon from '@/shared/svg'

import styles from './style.module.scss'
import Image from 'next/image'

type TProps = {
  card: TCard
}

const Card: FC<TProps> = ({ card }) => (
  <div className={styles.card}>
    <div>
      <Icon className={styles.icon} name={card.img} />
      <h4 className={styles.title}>{card.title}</h4>
    </div>

    <Image src={'/main-page/card-bg.jpg'} alt="bg" fill />
  </div>
)

export default Card
