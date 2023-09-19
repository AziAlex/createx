import Pricing from '@/page/services/interior-design/ui/pricing'
import OurBenefits from './ui/our-benefits'
import RelatedProjects from './ui/related-projects'
import HeaderInfo from '@/widgets/header-info'

const InteriorDesignPage = () => (
  <>
    <HeaderInfo
      img='/pages/services/interior-design/header.png'
      title='INTERIOR DESIGN'
      description='Dui augue nec mi mi. Ut ac lectus donec fames pellentesque. Laoreet aenean vulputate elementum blandit amet.'
      imgWidth={944}
    />
    <OurBenefits />
    <RelatedProjects />
    <Pricing />
  </>
)

export default InteriorDesignPage
