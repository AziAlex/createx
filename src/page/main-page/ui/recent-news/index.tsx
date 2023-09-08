import React from 'react'
import Wrap from '@/shared/ui/wrap'
import Button from '@/shared/ui/btns/btn'

import styles from './style.module.scss'

const RecentNews = () => {
  return (
    <Wrap>
      <div className={styles.recentNews}>
        <h2>Recent news</h2>
        <div className={styles.footer}>
          <h3>Explore all our news posts</h3>
          <Button title='View all news' size='large' solid />
        </div>
      </div>
    </Wrap>
  )
}

export default RecentNews