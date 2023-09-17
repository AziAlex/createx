import { stagesData } from '@/page/services/interior-design/ui/stages/lib/stagesData'
import Wrap from '@/shared/ui/wrap'
import StageItem from '@/page/services/interior-design/ui/stages/ui/stage-item'

import styles from './style.module.scss'

const OfferStages = () => (
  <Wrap>
    <div className={styles.wrap}>
      <h2>That’s how we do it</h2>
      <ol>
        {stagesData.map((item, i) => (
          <StageItem key={i} {...item} />
        ))}
      </ol>
    </div>
  </Wrap>
)

export default OfferStages
