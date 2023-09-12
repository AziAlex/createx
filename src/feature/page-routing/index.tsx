'use client'

import React from 'react'
import { usePathname } from 'next/navigation'

import styles from './style.module.scss'
import Link from 'next/link'

const PageRouter = () => {
  const patchName = usePathname()

  const patchList = ['Homepage', ...patchName.split('/').filter(item => item !== '')]

  console.log(patchList)
  return (
    <ul className={styles.routList}>
      {patchList.map((item, idx) => (
        <li key={idx}>
          <Link href={item === 'Homepage' ? '/' : `/${item}`}>
            {idx === 0 ? '' : <span>/ </span>}{item}
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default PageRouter