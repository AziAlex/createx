'use client'
import React, { FC } from 'react'

import Button from '@/shared/ui/btns/btn'
import Icon, { IconName } from '@/shared/svg'
import { tableData } from '@/page/services/interior-design/lib/tableData'

import styles from './style.module.scss'

const PricingTable: FC = () => (
  <div className={styles.tableWrap}>
    <table>
      <thead>
      <tr>
        {tableData.tableHeader.map((item, index) => (
          <th key={index}>
            <p>{item.title}</p>
            {item.subtitle && (
              <p>{item.subtitle}</p>
            )}
          </th>
        ))}
      </tr>
      </thead>

      <tbody>
      {tableData.tableBody.map((item, index) => (
        <tr key={index}>
          {item.map((item, index) => (
            <td key={index}>
              {item.body && item.body}
              {item.type === 'icon' && (
                <Icon name={item.iconName as IconName} className={styles.checkmark} />
              )}
            </td>
          ))}
        </tr>
      ))}

      <tr>
        {tableData.tableFooter.map((item, index) => (
          <td key={index}>
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
)

export default PricingTable