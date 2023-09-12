'use client'

import React from 'react'

import Image from 'next/image'
import img from '/public/sliders/comment.jpg'
import ClientCommentSlider from '@/feature/sliders/client-comment'

import styles from './style.module.scss'

const ClientComents = () => (
  <div className={styles.wrap}>
    <div className={styles.post}>
      <h2>What our clients are saying</h2>
      <ClientCommentSlider />
    </div>
    <div className={styles.img}>
      <Image src={img} alt='coment' fill />
    </div>
  </div>
)

export default ClientComents