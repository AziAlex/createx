import React from 'react'

import styles from './style.module.scss'
import { servicesData } from '@/page/services-page/main/lib/constants'
import Image from 'next/image'
import Button from '@/shared/ui/btns/btn'
import Wrap from '@/shared/ui/wrap'

const MainServices = () => (
  <div className={styles.main}>
    <Wrap>
      <ul>
        {servicesData.map((item, idx) => (
          <li key={idx}>
            <Image src={item.img} alt={item.title} width={575} height={420} />
            <div className={styles.content}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <Button title='Learn more' size='regular' />
            </div>
          </li>
        ))}
      </ul>
    </Wrap>
  </div>
)

export default MainServices