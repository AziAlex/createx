import React from 'react'

import styles from './style.module.scss'
import Image from 'next/image'
import Wrap from '@/shared/ui/wrap'
import { someFactsInfo } from '@/page/main-page/ui/Some-facts-and-figures/lib/constants'

const SomeFacts = () => (
  <div className={styles.wrap}>
    <Image src='/main-page/some-facts.png' alt='some-facts' width={1066} height={859} />
    <Wrap>
      <div className={styles.wrapContent}>
        <h2>Some facts and figures</h2>
        <ul>
          {someFactsInfo.map((item, idx) => (
            <li key={idx}>
              <span style={{
                background: `conic-gradient(${item.color} 0% ${item.percent}%, transparent 0% ${item.percent}%, transparent ${item.percent}% 100%)`,
              }}>
                <span>
                {item.count}
                </span>
              </span>
              <p>{item.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </Wrap>
  </div>
)

export default SomeFacts