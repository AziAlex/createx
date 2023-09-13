import React, { FC } from 'react'

import FactCard from '@/entities/fact-card'
import { TCard } from '@/entities/fact-card/lib/type'

import styles from './style.module.scss'

type TProps = {
  cards: TCard[]
  darkTheme?: boolean
}

const FactCards: FC<TProps> = ({ cards, darkTheme = false }) => (
  <div className={styles.cards__wrapper}>
    {cards.map((card, idx) => (
      <React.Fragment key={idx}>
        {idx !== 0 && <span></span>}
        <FactCard card={card} darkTheme={darkTheme} />
      </React.Fragment>
    ))}
  </div>
)

export default FactCards
