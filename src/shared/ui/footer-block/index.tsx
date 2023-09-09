import React, { FC } from 'react'

import styles from './style.module.scss'

interface IProps {
  title: string
  children: React.ReactNode
}

const Index: FC<IProps> = ({ children, title }) => (
  <div className={styles.wrap}>
    <h3>{title}</h3>
    {children}
  </div>
)

export default Index