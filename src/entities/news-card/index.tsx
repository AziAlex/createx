import React, { FC } from 'react'
import Image from 'next/image'

import { INewsCard } from '@/shared/types/news'
import { createDate } from '@/shared/util/date'
import Icon from '@/shared/svg'

import styles from './style.module.scss'

interface IProps {
  card: INewsCard
  minCard?: boolean
}

const NewsCard: FC<IProps> = ({ card, minCard }) => {


  return (
    <div>
      <Image src={card.img} alt={card.title} width={705} height={360} />
      <div className={styles.info}>
        <h4>{card.title}</h4>
        <div className={styles.subInfo}>
          <span>{card.type}</span>
          <span className={styles.line}></span>
          <span>{createDate(card.date)}</span>
          <span className={styles.line}></span>
          <span>
          <Icon name='chat' className={styles.svg} />
            {card.comments} comments
        </span>
        </div>
        {!minCard && <p>{card.description}</p>}
      </div>
    </div>
  )
}

export default NewsCard