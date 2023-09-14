import React from 'react'

import PartnersSlider from '@/feature/sliders/partners-slider'
import ClientComents from '@/widgets/client-coments/inxex'
import Wrap from '@/shared/ui/wrap'

import styles from "./style.module.scss"
const ClientPartners = () => {
  return (
    <div className={styles.clientWrap}>
      <Wrap>
        <PartnersSlider
          rows={1}
          title='Supported by 12+ partners'
        />
        <ClientComents />
      </Wrap>
    </div>
  )
}

export default ClientPartners