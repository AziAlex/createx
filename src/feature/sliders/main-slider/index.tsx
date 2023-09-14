'use client'

import { useState } from 'react'
import Slider from 'react-slick'

import SliderItem from '@/feature/sliders/main-slider/ui/slider-item'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import styles from './style.module.scss'

const MainSlider = () => {
  const [activeSlide, setActiveSlide] = useState(0)
  const items = [0, 1, 2, 3]

  return (
    <Slider
      className={styles.slider}
      customPaging={(index) => (
        <a
          className={activeSlide === index ? styles.active : ''}>
          <span onClick={() => setActiveSlide(index)} />
          0{index + 1}
        </a>
      )}
      arrows={false}
      slidesToScroll={1}
      slidesToShow={1}
      infinite={true}
      speed={500}
      dots
    >
      {items.map(item => (
        <SliderItem key={item} />
      ))}
    </Slider>
  )
}

export default MainSlider