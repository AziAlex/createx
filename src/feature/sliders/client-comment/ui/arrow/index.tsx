import React, { FC } from 'react'

import Icon from '@/shared/svg'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import styles from './style.module.scss'

interface IProps {
  arrow?: 'left' | 'right';
}

const ArrowSlide: FC<IProps> = ({ arrow, onClick }) => (
  <button onClick={onClick} className={styles[arrow]}>
    {arrow === 'left' ? (
      <Icon name='arrowLeft' className={styles.arrow} />
    ) : (
      <Icon name='arrowRight' className={styles.arrow} />
    )}
  </button>
)


export default ArrowSlide