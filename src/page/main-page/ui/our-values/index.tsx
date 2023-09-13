import Facts from '@/widgets/facts'
import TitleBlock from '@/shared/ui/title-block'
import { cards } from './lib/constants'

const OurValues = () => (
  <Facts cards={cards}>
    <TitleBlock
      title="Our core values"
      subtitle="Our mission is to set the highest standards for construction sphere."
    />
  </Facts>
)

export default OurValues
