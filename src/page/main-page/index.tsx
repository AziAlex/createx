import Header from '@/widgets/header'
import MainSlider from '../../feature/sliders/main-slider'
import OurValues from './ui/ourValues'
import VideoBlock from '@/page/main-page/ui/video-block'
import ClientPartners from '@/page/main-page/ui/client-wrap'
import RecentNews from '@/page/main-page/ui/recent-news'


const ManiPage = () => (
  <>
    <Header />
    <MainSlider />
    <VideoBlock />
    <OurValues />
    <ClientPartners />
    <RecentNews />
  </>
)

export default ManiPage
