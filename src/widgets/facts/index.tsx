import React, { FC } from 'react'
import clsx from 'clsx'

import FactCards from '@/widgets/facts/ui/fact-cards'
import { TCard } from '@/entities/fact-card/lib/type'
import Button from '@/shared/ui/btns/btn'
import Wrap from '@/shared/ui/wrap'

import styles from './style.module.scss'

interface IProps {
  children: React.ReactNode
  darkTheme?: boolean
  buttonText?: string
  cards: TCard[]
}

const Facts: FC<IProps> = ({ children, buttonText, darkTheme, cards }) => (
  <div className={clsx(styles.wrap, { [styles.darkTheme]: darkTheme })}>
    <Wrap>
      {children}
      <FactCards cards={cards} darkTheme={darkTheme} />
    </Wrap>
    {buttonText && <Button title={buttonText} size='large' solid />}
  </div>
)

export default Facts