import React from 'react'
import TitleBlock from '@/shared/ui/title-block'
import Wrap from '@/shared/ui/wrap'
import CardView from './card'
import { cards } from './lib/constants'

import cl from './style.module.scss'

const OurValues = () => (
  <Wrap>
    <div className={cl.our_values}>
      <TitleBlock
        title="Our core values"
        subtitle="Our mission is to set the highest standards for construction sphere."
      />

      <div className={cl.cards__wrapper}>
        {cards.map((card, idx) => (
          <React.Fragment key={idx}>
            {idx !== 0 && <span></span>}
            <CardView card={card} />
          </React.Fragment>
        ))}
      </div>
    </div>
  </Wrap>
)

export default OurValues
