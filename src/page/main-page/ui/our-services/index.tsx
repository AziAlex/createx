import Image from 'next/image'
import Button from '@/shared/ui/btns/btn'
import Wrap from '@/shared/ui/wrap'
import TitleBlock from '@/shared/ui/title-block'
import FooterBlock from '@/shared/ui/footer-block'

import Card from './card'
import { cards } from './lib/constants'

import styles from './style.module.scss'

const OurServices = () => (
  <div className={styles.wrap}>
    <Image src={'/main-page/bg-image.png'} alt="bg" fill />
    <Wrap>
      <div className={styles.our_services}>
        <TitleBlock
          title="Our services"
          subtitle="Createx Construction Bureau is a construction giant with a full range of construction services."
        />

        <div className={styles.cards}>
          {cards.map((card, idx) => (
            <Card key={idx} card={card} />
          ))}
        </div>

        <FooterBlock title="Learn more about our services">
          <Button title="View services" size="large" solid />
        </FooterBlock>
      </div>
    </Wrap>
  </div>
)

export default OurServices
