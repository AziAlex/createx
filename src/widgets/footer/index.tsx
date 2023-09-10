import React from 'react'

import Wrap from '@/shared/ui/wrap'
import { FooterBottom, FooterMain, FooterTop } from '@/widgets/footer/ui'

import styles from './style.module.scss'

const Footer = () => (
  <div className={styles.footer}>
    <Wrap>
      <div className={styles.footerWrap}>
        <FooterTop />
        <FooterMain />
        <FooterBottom />
      </div>
    </Wrap>
  </div>
)

export default Footer