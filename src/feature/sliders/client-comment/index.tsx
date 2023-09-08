import React from 'react'
import Slider from 'react-slick'

import Icon from '@/shared/svg'
import ClientCommentItem from '@/entities/client-comment'

import styles from './style.module.scss'
import "./style.scss"

const ClientCommentSlider = () => {
  return (
    <div className={styles.slider}>
      <Slider
        // arrows
        slidesToScroll={1}
        slidesToShow={1}
        infinite={true}
        speed={500}

        prevArrow={<button><Icon name='arrowLeft' className={styles.arrow} /></button>}
        nextArrow={<button><Icon name='arrowRight' className={styles.arrow} /></button>}
      >
        <ClientCommentItem />
        <ClientCommentItem />
      </Slider>
    </div>
  )
}

export default ClientCommentSlider