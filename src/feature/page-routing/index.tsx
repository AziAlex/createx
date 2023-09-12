'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'

import styles from './style.module.scss'

const PageRouter = () => {
  const patchName = usePathname()

  const patchList = ['homepage', ...patchName.split('/').filter(item => item !== '')]

  return (
    <ul className={styles.routList}>
      {patchList.map((item, idx) => (
        <li key={idx}>
          <Link href={item === 'Homepage' ? '/' : `/${item}`}>
            {idx === 0 ? '' : <span>/</span>}{item}
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default PageRouter