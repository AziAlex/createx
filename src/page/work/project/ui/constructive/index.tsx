import React from 'react'
import Image from 'next/image'
import Wrap from '@/shared/ui/wrap'
import Icon from '@/shared/svg'

import styles from './style.module.scss'

const decisions = [
  'Vitae ultrices ornare eu sed in est quisque duis id.',
  'A fermentum in morbi pretium aliquam adipiscing donec tempus.',
  'Mauris odio pellentesque commodo, diam.',
  'Fermentum vestibulum est fermentum, egestas gravida scelerisque quis.',
  'At pharetra libero blandit risus, fringilla sed commodo diam.',
  'Integer ultricies viverra ut enim viverra ut.',
]

const Constructive = () => (
  <div className={styles.wrap}>
    <Wrap>
      <div className={styles.container}>
        <div className={styles.imgBox}>
          <Image
            src="/pages/project/Worker.jpg"
            alt="worker"
            width={495}
            height={550}
          />
        </div>

        <div className={styles.content}>
          <h2>Constructive decisions</h2>

          <ul>
            {decisions.map((decision, idx) => (
              <li key={idx}>
                <Icon name="check" className={styles.icon} />
                <p>{decision}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Wrap>
  </div>
)

export default Constructive
