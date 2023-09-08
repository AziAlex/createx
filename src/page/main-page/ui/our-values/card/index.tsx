import { FC } from 'react'
import { Card } from '../lib/constants'
import Icon from '@/shared/svg'

import cl from './style.module.scss'

type Props = {
  card: Card
}

const Card: FC<Props> = ({ card }) => (
  <div className={cl.card}>
    <div className={cl.img__wrapper}>
      <Icon className={cl.icon} name={card.img} />
    </div>
    <h3>{card.title}</h3>
    <p>{card.text}</p>
  </div>
)

export default Card
