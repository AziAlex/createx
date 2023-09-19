import HeaderWrap from '@/widgets/header-info'
import MainServices from '@/page/services/services-page/ui/main'

const ServicePage = () => (
  <>
    <HeaderWrap
      imgWidth={975}
      img='/pages/services/header.png'
      title='SERVICES'
      description='If you are looking for a full-service construction company, look to Createx Construction Bureau. We are doing our best to be a partner for all of your construction needs.'
    />
    <MainServices />
  </>
)

export default ServicePage
