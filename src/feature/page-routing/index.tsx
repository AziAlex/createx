'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'

import styles from './style.module.scss'

const PageRouter = () => {
  const pathName = usePathname()

  const patchList = ['homepage', ...pathName.split('/').filter(item => item !== '')]

  return (
    <ul className={styles.routList}>
      {patchList.map((item, idx) => (
        <li key={idx}>
          <Link href={item === 'homepage' ? '/' : `/${item}`}>
            {idx === 0 ? null : <span>/ </span>}{item}
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default PageRouter