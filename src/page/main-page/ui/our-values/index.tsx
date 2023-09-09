import React from 'react'
import Wrap from '@/shared/ui/wrap'
import CardView from './card'
import { cards } from './lib/constants'

import cl from './style.module.scss'

const OurValues = () => (
  <Wrap>
    <div className={cl.our_values}>
      <h2>Our core values</h2>
      <p>
        Our mission is to set the highest standards for construction sphere.
      </p>

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
