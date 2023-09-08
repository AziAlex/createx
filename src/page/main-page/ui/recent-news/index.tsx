import Wrap from '@/shared/ui/wrap'
import Button from '@/shared/ui/btns/btn'
import NewsCard from '@/entities/news-card'
import { newsDbData } from '@/shared/data/newsDb'

import styles from './style.module.scss'

const RecentNews = () => (
  <Wrap>
    <div className={styles.recentNews}>
      <h2>Recent news</h2>
      <div className={styles.newsBlock}>
        <NewsCard card={newsDbData[0]} />
        <NewsCard card={newsDbData[1]} minCard />
        <NewsCard card={newsDbData[2]} minCard />
      </div>
      <div className={styles.footer}>
        <h3>Explore all our news posts</h3>
        <Button title='View all news' size='large' solid />
      </div>
    </div>
  </Wrap>
)

export default RecentNews