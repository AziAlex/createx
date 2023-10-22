'use client'

import { useEffect, useState } from 'react'
import { TNews } from '@/shared/types/news'
import Wrap from '@/shared/ui/wrap'
import NewsList from '@/page/news/news-page/ui/categories/ui/news-list'
import { newsData } from '@/shared/data/newsDb'
import CategoriesList from '@/page/news/news-page/ui/categories/ui/categories-list'
import Pagination from '@/page/news/news-page/ui/categories/ui/pagination'
import styles from './style.module.scss'

const Categories = () => {
  const [currentCategory, setCurrentCategory] = useState<TNews | 'All News'>('All News')
  const [page, setPage] = useState(1)
  const [pageCount, setPageCount] = useState(1)

  const filteredData = currentCategory === 'All News' ? newsData : newsData.filter(item => item.type === currentCategory)
  const dataToRender = filteredData.length > 6 ? filteredData.slice(page - 1, page + 6 - 1) : filteredData

  useEffect(() => {
    const pageCount = Math.ceil(filteredData.length / 6)
    setPageCount(pageCount)
  }, [filteredData])

  useEffect(() => {
    setPage(1)
  }, [currentCategory])

  return (
    <div className={styles.wrap}>
      <Wrap>
        <h2>Categories</h2>
        <CategoriesList currentCategory={currentCategory} setCurrentCategory={setCurrentCategory} />
        <NewsList data={dataToRender} />
        <Pagination pages={pageCount} page={page} setPage={setPage} />
      </Wrap>
    </div>
  )
}

export default Categories
