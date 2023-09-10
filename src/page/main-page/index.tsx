import AskUs from '@/page/main-page/ui/ask-us'
import ClientPartners from '@/page/main-page/ui/client-wrap'
import Header from '@/widgets/header'
import MainSlider from '@/feature/sliders/main-slider'
import OurValues from '@/page/main-page/ui/our-values'
import VideoBlock from '@/page/main-page/ui/video-block'
import RecentNews from '@/page/main-page/ui/recent-news'
import FooterForm from '@/widgets/footer-form'


const ManiPage = () => (
  <>
    <Header />
    <MainSlider />
    <VideoBlock />
    <OurValues />
    <AskUs />
    <ClientPartners />
    <RecentNews />
    <FooterForm />
  </>
)

export default ManiPage
