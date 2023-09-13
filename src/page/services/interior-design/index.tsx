import React from 'react'
import FooterForm from '@/widgets/footer-form'
import Footer from '@/widgets/footer'
import InteriorDesignHeader from '@/page/services/interior-design/ui/header'
import PricingTable from '@/page/services/interior-design/ui/pricing'
import OurBenefits from './ui/our-benefits'

const InteriorDesignPage = () => (
    <>
      <InteriorDesignHeader />
      <OurBenefits />
      <PricingTable/>
      <FooterForm />
      <Footer />
    </>

)

export default InteriorDesignPage
