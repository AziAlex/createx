import { useState } from 'react'

import styles from './style.module.scss'
import Wrap from '@/shared/ui/wrap'
import { stagesData } from '@/page/services/interior-design/ui/stages/lib/stagesData'
import StageItem from '@/page/services/interior-design/ui/stages/ui/stage-item'

const OfferStages = () => {

  return (
    <Wrap>
      <div className={styles.wrap}>
        <h2>That’s how we do it</h2>
        <ol>
          {stagesData.map((item, i) => (
            <StageItem key={i} {...item} stage={i + 1} />
          ))}
        </ol>
      </div>
    </Wrap>
  )
}
export default OfferStages
