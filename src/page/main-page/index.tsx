import AskUs from '@/page/main-page/ui/ask-us'
import ClientPartners from '@/page/main-page/ui/client-wrap'
import MainSlider from '@/feature/sliders/main-slider'
import OurValues from '@/page/main-page/ui/our-values'
import VideoBlock from '@/page/main-page/ui/video-block'
import RecentNews from '@/page/main-page/ui/recent-news'
import OurServices from '@/page/main-page/ui/our-services'
import ProjectShowcase from '@/page/main-page/ui/project-showcase'
import SomeFacts from '@/page/main-page/ui/Some-facts-and-figures'

const MainPage = () => (
  <>
    <MainSlider />
    <VideoBlock />
    <OurValues />
    <AskUs />
    <OurServices />
    <ProjectShowcase />
    <ClientPartners />
    <SomeFacts />
    <RecentNews />
  </>
)

export default MainPage
