import React, { FC } from 'react'
import { TCard } from '@/page/main-page/ui/project-showcase/lib/constants'

import Image from 'next/image'
import Button from '@/shared/ui/btns/btn'

import styles from './style.module.scss'

type TProsp = {
  card: TCard
}

const Card: FC<TProsp> = ({ card }) => (
  <div className={styles.card}>
    <Image src={card.img} alt={card.alt} width={390} height={345} />

    <div className={styles.content}>
      <h4 className={styles.title}>{card.title}</h4>
      <p className={styles.description}>{card.description}</p>
      <div className={styles.btn}>
        <Button title='View Project' size='regular' />
      </div>
    </div>
  </div>
)

export default Card
