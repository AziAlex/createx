import React from 'react'
import FooterForm from '@/widgets/footer-form'
import Footer from '@/widgets/footer'
import InteriorDesignHeader from '@/page/services/interior-design/ui/header'
import Pricing from '@/page/services/interior-design/ui/pricing'
import OurBenefits from './ui/our-benefits'
import Offer from '@/page/services/interior-design/ui/offer'
import Stages from '@/page/services/interior-design/ui/stages'

const InteriorDesignPage = () => (
  <>
    <InteriorDesignHeader />
    <Offer />
    <Stages />
    <OurBenefits />
    <Pricing />
    <FooterForm />
    <Footer />
  </>

)

export default InteriorDesignPage
