import React from 'react'
import FooterForm from '@/widgets/footer-form'
import Footer from '@/widgets/footer'
import HeaderServices from '@/page/services-page/ui/header'
import MainServices from '@/page/services-page/main'

const ServicePage = () => (
  <>
    <HeaderServices />
    <MainServices />
    <FooterForm />
    <Footer />
  </>
)

export default ServicePage