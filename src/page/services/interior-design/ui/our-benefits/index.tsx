import Facts from '@/widgets/facts'
import TitleBlock from '@/shared/ui/title-block'

import { cards } from './lib/constants'

import styles from './style.module.scss'

const OurBenefits = () => (
  <div className={styles.wrap}>
    <Facts cards={cards} buttonText='Discuss a project' darkTheme>
      <TitleBlock
        title='Our benefits'
        subtitle='Our mission is to set the highest standards for construction sphere.'
        darkTheme
      />
    </Facts>
  </div>
)

export default OurBenefits
