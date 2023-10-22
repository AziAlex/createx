import React, { FC } from 'react'
import { INewsCard, TNews } from '@/shared/types/news'
import NewsCard from '@/entities/news-card'
import styles from './style.module.scss'

interface NewsListProps {
  data: INewsCard[]
}

const NewsList: FC<NewsListProps> = ({ data }) => (
  <div className={styles.wrap}>
    {data.length === 0 && 'No news for your request'}
    <div>
      {
        data.length > 0 && data.map((item, idx) => (
            <NewsCard card={item} key={idx}/>
          ),
        )
      }
    </div>
  </div>
)

export default NewsList
