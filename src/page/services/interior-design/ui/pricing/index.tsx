'use client'

import { FC } from 'react'
import Image from 'next/image'

import Wrap from '@/shared/ui/wrap'
import PartnersSlider from '@/feature/sliders/partners-slider'
import PricingTable from '@/page/services/interior-design/ui/pricing/ui/table'

import styles from './style.module.scss'

const Pricing: FC = () => (
  <div className={styles.wrap}>
    <Image
      src={'/pages/services/interior-design/table-section-bg.png'}
      alt="bg"
      width={560}
      height={670}
    />
    <Wrap>
      <h2>Pricing</h2>
      <p>We offer you three categories of construction.</p>
      <PricingTable />
      <PartnersSlider rows={1} title="Supported by 12+ partners" />
    </Wrap>
  </div>
)

export default Pricing
