'use client'

import React, { FC } from 'react'
import Slider from 'react-slick'
import Image from 'next/image'

import Wrap from '@/shared/ui/wrap'
import { partnesrsItems } from './lib/exports'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import styles from './style.module.scss'

interface IProps {
  title: string
  paragraph?: string
  rows: number
}

const PartnersSlider: FC<IProps> = ({ rows, paragraph, title }) => {
  return (
    <Wrap>
      <h2 className={styles.h2}>{title}</h2>
      {paragraph && <p className={styles.p}>{paragraph}</p>}
      <div className='sliderWrap'>
        <Slider
          className={styles.slider}
          arrows={false}
          slidesToShow={6}
          touchMove={false}
          autoplay
          autoplaySpeed={10}
          infinite={true}
          speed={3000}
          rows={rows}
          responsive={[
            {
              breakpoint: 1230,
              settings: {
                slidesToShow: 4,
              },
            }, {
              breakpoint: 800,
              settings: {
                slidesToShow: 3,
              },
            }, {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
              },
            },
          ]}
        >
          {partnesrsItems.map((item, idx) => (
            <Image
              key={idx}
              src={item}
              alt='img'
              width={120}
              height={64}
              className={styles.slide}
            />
          ))}
        </Slider>
      </div>
    </Wrap>
  )
}

export default PartnersSlider