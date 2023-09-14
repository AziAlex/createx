import React from 'react'
import Image from 'next/image'

import Button from '@/shared/ui/btns/btn'
import Wrap from '@/shared/ui/wrap'

import styles from './style.module.scss'

const MainSliderItem = () => {
  return (
    <div className={styles.sliderItem}>
      <Wrap>
        <div className={styles.sliderContent}>
          <h2>CREATE<span>X</span> CONSTRUCTION</h2>
          <p>Cras ultrices leo vitae non viverra. Fringilla nisi quisque consequat, dignissim vitae proin ipsum sed.
            Pellentesque nec turpis purus eget pellentesque integer ipsum elementum felis.</p>
          <div>
            <Button title='Learn more about us' size='large' />
            <Button title='SUBMIT REQUEST' size='large' solid />
          </div>
        </div>
      </Wrap>
      <Image src="/main-page/slider-bg-image.jpg" alt='slider' fill />
    </div>
  )
}

export default MainSliderItem