import { useState } from 'react'

import OfferAccordionItem from './ui/accordion-item'

import { accordionData } from '../../lib/accordionData'
import styles from './style.module.scss'

const OfferAccordion = () => {
  const startItem = accordionData[0].title
  const [activeItem, setActiveItem] = useState(startItem)

  return (
    <ul className={styles.wrap}>
      {accordionData.map((item, i) => (
        <OfferAccordionItem {...item} key={i} activeItem={activeItem} setActiveItem={setActiveItem} />
      ))}
    </ul>
  )
}
export default OfferAccordion
