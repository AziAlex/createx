import Facts from '@/widgets/facts'
import TitleBlock from '@/shared/ui/title-block'
import { cards } from './lib/constants'

import styles from "./style.module.scss"

const OurValues = () => (
  <div className={styles.wrap}>
    <Facts cards={cards}>
      <TitleBlock
        title='Our core values'
        subtitle='Our mission is to set the highest standards for construction sphere.'
      />
    </Facts>
  </div>
)

export default OurValues
