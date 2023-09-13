import Facts from '@/widgets/facts'
import TitleBlock from '@/shared/ui/title-block'

import { cards } from './lib/constants'

const OurBenefits = () => (
  <Facts cards={cards} buttonText="Discuss a project" darkTheme>
    <TitleBlock
      title="Our benefits"
      subtitle="Our mission is to set the highest standards for construction sphere."
    />
  </Facts>
)

export default OurBenefits
