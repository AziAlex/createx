'use client'
import React, { FC } from 'react'
import Image from 'next/image'
import Wrap from '@/shared/ui/wrap'
import Button from '@/shared/ui/btns/btn'
import PartnersSlider from '@/feature/sliders/partners-slider'
import cl from '@/page/services/interior-design/ui/pricing/style.module.scss'
import Icon, { IconName } from '@/shared/svg'
import { tableData } from '@/page/services/interior-design/lib/tableData'

const PricingTable: FC = () => {
  return (
    <div className={cl.wrap}>
      <Image src={'/pages/services/interior-design/table-section-bg.png'} alt='bg' width={560} height={670} />
      <Wrap>
        <h2>Pricing</h2>
        <p>We offer you three categories of construction.</p>
        <div>
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
                      <Icon name={item.iconName as IconName} className={cl.checkmark} />
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
        <PartnersSlider
          rows={1}
          title='Supported by 12+ partners'
        />
      </Wrap>
    </div>
  )
}

export default PricingTable