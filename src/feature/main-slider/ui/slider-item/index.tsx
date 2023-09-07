import React from 'react'

import Image from 'next/image'
import img from '/public/main-page/slider-bg-image.jpg'

import cl from './style.module.scss'
import Btn from '@/shared/ui/btns/btn'
import Wrap from '@/shared/ui/wrap'

const MainSliderItem = () => {
  return (
    <div className={cl.sliderItem}>
      <Wrap>
        <div className={cl.sliderContent}>
          <h2>CREATE<span>X</span> CONSTRUCTION</h2>
          <p>Cras ultrices leo vitae non viverra. Fringilla nisi quisque consequat, dignissim vitae proin ipsum sed.
            Pellentesque nec turpis purus eget pellentesque integer ipsum elementum felis.</p>
          <div>
            <Btn title='Learn more about us' type='large' />
            <Btn title='SUBMIT REQUEST' type='large' solid />
          </div>
        </div>
      </Wrap>
      <Image src={img} alt='slider' fill />
    </div>
  )
}

export default MainSliderItem