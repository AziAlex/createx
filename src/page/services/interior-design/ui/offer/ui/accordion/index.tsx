'use client'

import { useState } from 'react'

import { accordionData } from '../../lib/accordionData'
import OfferAccordionItem from './ui/accordion-item'

import styles from './style.module.scss'

const OfferAccordion = () => {
  const startItem = accordionData[0].title
  const [activeItem, setActiveItem] = useState(startItem)

  return (
    <ul className={styles.wrap}>
      {accordionData.map((item, idx) => (
        <OfferAccordionItem {...item} key={idx} activeItem={activeItem} setActiveItem={setActiveItem} />
      ))}
    </ul>
  )
}

export default OfferAccordion
