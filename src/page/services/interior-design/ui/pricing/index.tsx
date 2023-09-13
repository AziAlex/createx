'use client'

import React from 'react'
import styles from '@/page/services/interior-design/ui/pricing/style.module.scss'
import Image from 'next/image'
import Wrap from '@/shared/ui/wrap'
import Button from '@/shared/ui/btns/btn'
import Icon, { IconName } from '@/shared/svg'
import clsx from 'clsx'
import PartnersSlider from '@/feature/sliders/partners-slider'
import { tableData } from '@/page/services/interior-design/lib/tableData'

const PricingTable = () => {
  return (
    <div className={styles.wrap}>
      <Image src={'/pages/services/interior-design/table-section-bg.png'} alt='bg' width={560} height={670} />
      <Wrap>
        <div className={styles.pricing}>
          <h2 className={styles.title}>Pricing</h2>
          <p className={styles.text}>
            We offer you three categories of construction.
          </p>
          <div className={styles.tableWrap}>
            <table className={styles.table}>
              <thead className={styles.tableHead}>
              <tr className={styles.tableColumns}>
                {tableData.tableHeader.map((item, index) => (
                  <th key={index} className={styles.tableColumn}>
                    <p className={item.style === 'small' ? styles.tableColumnsTitleSmall : styles.tableColumnsTitle}>
                      {item.title}
                    </p>
                    {item.subtitle && (
                      <p className={styles.tableColumnsSubTitle}>{item.subtitle}</p>
                    )}
                  </th>
                ))}
              </tr>
              </thead>
              <tbody className={styles.tableBody}>
              {tableData.tableBody.map((item, index) => (
                <tr key={index} className={styles.tableRow}>
                  {item.map((item, index) => (
                    <td key={index}
                        className={item.type === 'title' ? styles.tableRowElementText : styles.tableRowElement}>
                      {item.body && item.body}
                      {item.type === 'icon' && (
                        <Icon name={item.iconName as IconName} className={styles.okImage} />
                      )}
                    </td>
                  ))}
                </tr>
              ))}
              <tr className={styles.tableRow}>
                {tableData.tableFooter.map((item, index) => (
                  <td key={index}
                      className={item.type === 'empty' ? styles.tableRowElementText : clsx(styles.tableRowElement, styles.tableRowElementButton)}>
                    {item.body && item.body}
                    {item.type === 'button' && item.props && (
                      <Button {...item.props} />
                    )}
                  </td>
                ))}
              </tr>
              </tbody>
            </table>
          </div>
          <PartnersSlider
            rows={1}
            title='Supported by 12+ partners'
          />
        </div>
      </Wrap>
    </div>
  )
}

export default PricingTable