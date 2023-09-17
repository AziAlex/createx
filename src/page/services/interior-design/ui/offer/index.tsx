import Image from 'next/image'

import Wrap from '@/shared/ui/wrap'
import OfferAccordion from './ui/accordion'

import styles from './style.module.scss'

const Offer = () => (
  <div className={styles.wrap}>
    <Wrap>
      <div className={styles.offer}>
        <div>
          <Image
            src={'/pages/services/interior-design/offer.png'}
            alt='offer'
            width={705}
            height={440}
            layout='responsive'
          />
        </div>
        <div>
          <h2>We offer</h2>
          <OfferAccordion />
        </div>
      </div>
    </Wrap>
  </div>
)

export default Offer
