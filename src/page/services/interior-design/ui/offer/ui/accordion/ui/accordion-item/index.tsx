import styles from './style.module.scss'
import clsx from 'clsx'
import { FC } from 'react'

interface IOfferAccordionItemProps {
  title: string
  description: string
  activeItem: string
  setActiveItem: (title: string) => void
}

const OfferAccordionItem: FC<IOfferAccordionItemProps> = ({ title, description, activeItem, setActiveItem }) => (
  <li
    onClick={() => title !== activeItem && setActiveItem(title)}
    className={clsx(styles.wrap, activeItem === title && styles.active)}>
    <h3>{title}</h3>
    <p>{description}</p>
  </li>
)

export default OfferAccordionItem
