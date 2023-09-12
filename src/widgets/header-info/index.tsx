import React, { FC } from 'react'
import Image from 'next/image'

import Wrap from '@/shared/ui/wrap'

import styles from './style.module.scss'
import PageRouter from '@/feature/page-routing'

interface IProps {
  children: React.ReactNode
  img: string
  title: string
  description: string
  imgWidth?: number
}

const HeaderWrap: FC<IProps> = ({ children, img, title, description, imgWidth }) => (
  <div className={styles.headerWrap}>
    <Image
      src={img}
      alt='header-img'
      width={1920}
      height={600}
      style={{ maxWidth: imgWidth }}
    />

    {children}
    <Wrap>
      <PageRouter />
      <div className={styles.content}>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </Wrap>
  </div>
)

export default HeaderWrap