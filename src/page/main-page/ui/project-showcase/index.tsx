'use client'

import FooterBlock from '@/shared/ui/footer-block'
import Button from '@/shared/ui/btns/btn'
import { cards } from './lib/constants'
import Card from './card'
import Slider from 'react-slick'

import styles from './style.module.scss'
import Wrap from '@/shared/ui/wrap'
import { ArrowSlider } from '@/feature/sliders/client-comment/ui/arrow-slider'

const ProjectShowcase = () => {
  return (
    <Wrap>
      <div className={styles.showcase}>
        <h2 className={styles.title}>
          Browse our selected projects and learn more about our work
        </h2>

        <Slider
          className={styles.slider}
          slidesToScroll={1}
          slidesToShow={3}
          infinite={true}
          speed={500}
          nextArrow={<ArrowSlider arrow="right" />}
          prevArrow={<ArrowSlider arrow="left" />}
        >
          {cards.map((card, idx) => (
            <Card key={idx} card={card} />
          ))}
        </Slider>

        <FooterBlock title="Explore all our works">
          <Button title="View portfolio" size="large" solid />
        </FooterBlock>
      </div>
    </Wrap>
  )
}

export default ProjectShowcase
