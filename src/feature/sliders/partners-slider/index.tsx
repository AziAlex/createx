'use client'

import React, { FC } from 'react'

import Wrap from '@/shared/ui/wrap'
import { img1, img2, img10, img4, img3, img5, img6, img7, img8, img9, img11, img12 } from './lib/exports'
import Slider from 'react-slick'
import Image from 'next/image'

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
      <div className="sliderWrap">
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
          <Image className={styles.slide} src={img1} alt='img' width={120} height={64} />
          <Image className={styles.slide} src={img2} alt='img' width={120} height={64} />
          <Image className={styles.slide} src={img3} alt='img' width={120} height={64} />
          <Image className={styles.slide} src={img4} alt='img' width={120} height={64} />
          <Image className={styles.slide} src={img5} alt='img' width={120} height={64} />
          <Image className={styles.slide} src={img6} alt='img' width={120} height={64} />
          <Image className={styles.slide} src={img7} alt='img' width={120} height={64} />
          <Image className={styles.slide} src={img8} alt='img' width={120} height={64} />
          <Image className={styles.slide} src={img9} alt='img' width={120} height={64} />
          <Image className={styles.slide} src={img10} alt='img' width={120} height={64} />
          <Image className={styles.slide} src={img11} alt='img' width={120} height={64} />
          <Image className={styles.slide} src={img12} alt='img' width={120} height={64} />
        </Slider>
      </div>
    </Wrap>
  )
}

export default PartnersSlider