import React from 'react'
import Image from 'next/image'

import Wrap from '@/shared/ui/wrap'
import FormFooter from '@/feature/forms/footer-form'

import styles from './style.module.scss'

const FooterForm = () => (
  <div className={styles.wrap}>
    <Wrap>
      <div className={styles.parentForm}>
        <FormFooter />
      </div>
    </Wrap>
    <Image src='/main-page/footer.jpg' alt='footer' fill />
  </div>
)

export default FooterForm