import React, { FC, useEffect, useState } from 'react'

import styles from './style.module.scss'
import { IconArrowRight } from '@/shared/svg/ui/arrows/IconArrowRight'
import { IconArrowLeft } from '@/shared/svg/ui/arrows/IconArrowLeft'

interface PaginationProps {
  pages: number
  page: number
  setPage: (page: number) => void
}

const Pagination: FC<PaginationProps> = ({ pages, page, setPage }) => {
  const maxPaginationPages = pages > 4 ? 4 : pages
  const [pageFrom, setPageFrom] = useState(1)

  useEffect(() => {
    setPageFrom(1)
  }, [pages])

  const setDataPage = (page: number) => {
    setPage(page)
    if (pages > 4) {
      if (page <= pages - 3) {
        setPageFrom(page - 1 || 1)
      } else {
        setPageFrom(pages - 3)
      }
    }
  }

  return (
    <div className={styles.wrap}>
      <div>
        {pageFrom > 1 && (
          <button onClick={() => setDataPage(1)}>
            <IconArrowLeft className={styles.icon} />
          </button>
        )}
      </div>
      <div className={styles.pages}>
        {pages > 1 && Array.from({ length: maxPaginationPages }).map((_, idx) => (
          idx + 1 <= pages && (
            <button
              onClick={() => setDataPage(idx + pageFrom)}
              key={idx}
              className={idx + pageFrom === page ? styles.active : ''}
            >
              {idx + pageFrom}
            </button>
          )
        ))
        }
      </div>
      <div>
        {pages > 4 && page <= pages - 3 && (
          <button onClick={() => setDataPage(pages)}>
            <IconArrowRight className={styles.icon} />
          </button>
        )}
      </div>

    </div>
  )
}

export default Pagination
