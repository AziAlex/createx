import { FC } from 'react'
import Icon from '@/shared/svg'
import { TCard } from './lib/type'

import styles from './style.module.scss'
import clsx from 'clsx'

type TProps = {
  card: TCard
  darkTheme: boolean
}

const FactCard: FC<TProps> = ({ card, darkTheme }) => (
  <div className={clsx(styles.card, { [styles.darkTheme]: darkTheme })}>
    <div className={styles.img__wrapper}>
      <Icon className={styles.icon} name={card.img} />
    </div>
    <h3>{card.title}</h3>
    <p className={styles.text}>{card.text}</p>
  </div>
)

export default FactCard
