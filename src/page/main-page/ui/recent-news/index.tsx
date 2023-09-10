import Wrap from '@/shared/ui/wrap'
import Button from '@/shared/ui/btns/btn'
import NewsCard from '@/entities/news-card'
import { newsData } from '@/shared/data/newsDb'
import FooterBlock from '@/shared/ui/footer-block'

import styles from './style.module.scss'

const RecentNews = () => (
  <Wrap>
    <div className={styles.recentNews}>
      <h2>Recent news</h2>
      <div className={styles.newsBlock}>
        <NewsCard card={newsData[0]} />
        <NewsCard card={newsData[1]} minCard />
        <NewsCard card={newsData[2]} minCard />
      </div>
      <FooterBlock title="Explore all our news posts">
        <Button title="View all news" size="large" solid />
      </FooterBlock>
    </div>
  </Wrap>
)

export default RecentNews
