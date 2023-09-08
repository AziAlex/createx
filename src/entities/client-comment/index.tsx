import React from 'react'

import Image from 'next/image'
import img from '/public/clients/profile-image.png'

import styles from './style.module.scss'

const ClientCommentItem = () => {
  return (
    <div className={styles.item}>
      <Image src={img} alt='client' width={72} height={72} />
      <p>Ipsum aute sunt aliquip aute et occaecat. Anim minim do cillum eiusmod enim. Consectetur magna cillum consequat
        minim laboris cillum laboris voluptate minim proident exercitation ullamco.</p>
      <h5>Shawn Edwards</h5>
      <span>Position, Company name</span>
    </div>
  )
}

export default ClientCommentItem