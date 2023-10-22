import HeaderWrap from '@/widgets/header-info'
import Categories from '@/page/news/news-page/ui/categories'

const NewsPage = () => (
  <>
    <HeaderWrap
      imgWidth={1080}
      img='/news/header.png'
      title='NEWS'
      description='Stay tuned with our news, expert tips and articles.'
    />
    <Categories />
  </>
)

export default NewsPage
