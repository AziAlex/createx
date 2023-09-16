import React from 'react'
import FooterForm from '@/widgets/footer-form'
import Footer from '@/widgets/footer'
import InteriorDesignHeader from '@/page/services/interior-design/ui/header'
import Pricing from '@/page/services/interior-design/ui/pricing'
import OurBenefits from './ui/our-benefits'
import RelatedProjects from './ui/related-projects'

const InteriorDesignPage = () => (
  <>
    <InteriorDesignHeader />
    <OurBenefits />
    <RelatedProjects />
    <Pricing />
    <FooterForm />
    <Footer />
  </>
)

export default InteriorDesignPage
