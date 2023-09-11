import React, { FC } from 'react'
import { TCard } from '../lib/constants'

import styles from './style.module.scss'
import Image from 'next/image'
import Button from '@/shared/ui/btns/btn'

type TProsp = {
  card: TCard
}

const Card: FC<TProsp> = ({ card }) => (
  <div className={styles.card}>
    <Image src={card.img} alt={card.alt} fill />

    <div className={styles.content}>
      <h4 className={styles.title}>{card.title}</h4>
      <p className={styles.description}>{card.description}</p>
      <div className={styles.btn}>
        <Button title="View Project" size="regular" />
      </div>
    </div>
  </div>
)

export default Card
