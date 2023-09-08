import Header from '@/widgets/header'
import MainSlider from '../../feature/sliders/main-slider'
import OurValues from './ui/ourValues'
import VideoBlock from '@/page/main-page/ui/video-block'
import PartnersSlider from '@/feature/sliders/partners-slider'
import Wrap from '@/shared/ui/wrap'

const ManiPage = () => (
  <>
    <Header />
    <MainSlider />
    <VideoBlock />
    <OurValues />
    <Wrap>
      <PartnersSlider
        rows={1}
        title='Supported by 12+ partners'
        paragraph='We are supported by 12+ industry bodies and media partners.'
      />
    </Wrap>
  </>
)

export default ManiPage
