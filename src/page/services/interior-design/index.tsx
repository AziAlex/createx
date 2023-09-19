import Pricing from '@/page/services/interior-design/ui/pricing'
import OurBenefits from '@/page/services/interior-design/ui/our-benefits'
import Offer from '@/page/services/interior-design/ui/offer'
import Stages from '@/page/services/interior-design/ui/stages'
import RelatedProjects from '@/page/services/interior-design/ui/related-projects'
import HeaderInfo from '@/widgets/header-info'

const InteriorDesignPage = () => (
  <>
    <HeaderInfo
      img='/pages/services/interior-design/header.png'
      title='INTERIOR DESIGN'
      description='Dui augue nec mi mi. Ut ac lectus donec fames pellentesque. Laoreet aenean vulputate elementum blandit amet.'
      imgWidth={944}
    />
    <Offer />
    <Stages />
    <OurBenefits />
    <RelatedProjects />
    <Pricing />
  </>
)

export default InteriorDesignPage
