import React from 'react'
import Slider from 'react-slick'

import Icon from '@/shared/svg'
import ClientCommentItem from '@/entities/client-comment'
import Arrow from '@/feature/sliders/client-comment/ui/arrow'

import styles from './style.module.scss'
import './style.scss'

const ClientCommentSlider = () => {
  return (
    <div className={styles.slider}>
      <Slider
        slidesToScroll={1}
        slidesToShow={1}
        infinite={true}
        speed={500}
        nextArrow={<Arrow arrow='right' />}
        prevArrow={<Arrow arrow='left' />}
      >
        <ClientCommentItem />
        <ClientCommentItem />
      </Slider>
    </div>
  )
}

export default ClientCommentSlider