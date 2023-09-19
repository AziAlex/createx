import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import Button from '@/shared/ui/btns/btn'
import Wrap from '@/shared/ui/wrap'

import styles from './style.module.scss'
import { servicesData } from '@/page/services/services-page/ui/main/lib/constants'

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
              <Link href={item.href}>
                <Button title='Learn more' size='regular' />
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </Wrap>
  </div>
)

export default MainServices
