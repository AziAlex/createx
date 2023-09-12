'use client'

import Slider from 'react-slick'
import { ArrowSlider } from '@/feature/sliders/client-comment/ui/arrow-slider'
import { cards } from '@/page/main-page/ui/project-showcase/lib/constants'
import Card from '@/entities/showcase-card'

import styles from './style.module.scss'

const ShowCaseSlider = () => (
  <Slider
    className={styles.slider}
    slidesToScroll={1}
    slidesToShow={3}
    infinite
    speed={500}
    nextArrow={<ArrowSlider arrow='right' />}
    prevArrow={<ArrowSlider arrow='left' />}
    responsive={[
      {
        breakpoint: 760,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 450,
        settings: {
          slidesToShow: 1,
        },
      },
    ]}
  >
    {cards.map((card, idx) => (
      <Card key={idx} card={card} />
    ))}
  </Slider>
)

export default ShowCaseSlider