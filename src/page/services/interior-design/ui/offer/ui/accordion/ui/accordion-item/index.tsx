import { FC } from 'react'
import clsx from 'clsx'

import styles from './style.module.scss'

interface IOfferAccordionItemProps {
  title: string
  description: string
  activeItem: string
  setActiveItem: (title: string) => void
}

const OfferAccordionItem: FC<IOfferAccordionItemProps> = ({ title, description, activeItem, setActiveItem }) => {
  const handleClick = () => {
    title !== activeItem && setActiveItem(title)
  }

  return (
    <li
      onClick={handleClick}
      className={clsx(styles.wrap, activeItem === title && styles.active)}>
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  )
}

export default OfferAccordionItem
