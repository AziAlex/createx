import React from 'react'
import styles from '@/page/services/interior-design/ui/pricing/style.module.scss'
import Image from 'next/image'
import Wrap from '@/shared/ui/wrap'
import Button from '@/shared/ui/btns/btn'
import Icon from '@/shared/svg'
import clsx from 'clsx'
import PartnersSlider from '@/feature/sliders/partners-slider'
import ShowCaseSlider from '@/feature/sliders/showcase-slider'

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
                <th className={styles.tableColumn}><p className={styles.tableColumnsTitleSmall}>Items</p></th>
                <th className={styles.tableColumn}><p className={styles.tableColumnsTitle}>BASIC</p><p
                  className={styles.tableColumnsSubTitle}>$20 per m2</p></th>
                <th className={styles.tableColumn}><p className={styles.tableColumnsTitle}>STANDARD</p><p
                  className={styles.tableColumnsSubTitle}>$30 per m2</p></th>
                <th className={styles.tableColumn}><p className={styles.tableColumnsTitle}>BUSINESS</p><p
                  className={styles.tableColumnsSubTitle}>$40 per m2</p></th>
              </tr>
              </thead>
              <tbody className={styles.tableBody}>
              <tr className={styles.tableRow}>
                <td className={styles.tableRowElementText}>Installation plan</td>
                <td className={styles.tableRowElement}><Icon name={'okMark'} className={styles.okImage} /></td>
                <td className={styles.tableRowElement}><Icon name={'okMark'} className={styles.okImage} /></td>
                <td className={styles.tableRowElement}><Icon name={'okMark'} className={styles.okImage} /></td>
              </tr>
              <tr className={styles.tableRow}>
                <td className={styles.tableRowElementText}>Planning solutions (2-3 options)</td>
                <td className={styles.tableRowElement}><Icon name={'okMark'} className={styles.okImage} /></td>
                <td className={styles.tableRowElement}><Icon name={'okMark'} className={styles.okImage} /></td>
                <td className={styles.tableRowElement}><Icon name={'okMark'} className={styles.okImage} /></td>
              </tr>
              <tr className={styles.tableRow}>
                <td className={styles.tableRowElementText}>Lighting plan</td>
                <td className={styles.tableRowElement}><Icon name={'okMark'} className={styles.okImage} /></td>
                <td className={styles.tableRowElement}><Icon name={'okMark'} className={styles.okImage} /></td>
                <td className={styles.tableRowElement}><Icon name={'okMark'} className={styles.okImage} /></td>
              </tr>
              <tr className={styles.tableRow}>
                <td className={styles.tableRowElementText}>Flooring plan</td>
                <td className={styles.tableRowElement}><Icon name={'okMark'} className={styles.okImage} /></td>
                <td className={styles.tableRowElement}><Icon name={'okMark'} className={styles.okImage} /></td>
                <td className={styles.tableRowElement}><Icon name={'okMark'} className={styles.okImage} /></td>
              </tr>
              <tr className={styles.tableRow}>
                <td className={styles.tableRowElementText}>Heating floor laying scheme</td>
                <td className={styles.tableRowElement}><Icon name={'okMark'} className={styles.okImage} /></td>
                <td className={styles.tableRowElement}><Icon name={'okMark'} className={styles.okImage} /></td>
                <td className={styles.tableRowElement}><Icon name={'okMark'} className={styles.okImage} /></td>
              </tr>
              <tr className={styles.tableRow}>
                <td className={styles.tableRowElementText}>Air conditioner zones layout</td>
                <td className={styles.tableRowElement}><Icon name={'okMark'} className={styles.okImage} /></td>
                <td className={styles.tableRowElement}><Icon name={'okMark'} className={styles.okImage} /></td>
                <td className={styles.tableRowElement}><Icon name={'okMark'} className={styles.okImage} /></td>
              </tr>
              <tr className={styles.tableRow}>
                <td className={styles.tableRowElementText}>3D visualization of all rooms</td>
                <td className={styles.tableRowElement}>Simplified</td>
                <td className={styles.tableRowElement}><Icon name={'okMark'} className={styles.okImage} /></td>
                <td className={styles.tableRowElement}><Icon name={'okMark'} className={styles.okImage} /></td>
              </tr>
              <tr className={styles.tableRow}>
                <td className={styles.tableRowElementText}>Visualization of each room (3-4 angles)</td>
                <td className={styles.tableRowElement}><Icon name={'okMark'} className={styles.okImage} /></td>
                <td className={styles.tableRowElement}><Icon name={'okMark'} className={styles.okImage} /></td>
                <td className={styles.tableRowElement}><Icon name={'okMark'} className={styles.okImage} /></td>
              </tr>
              <tr className={styles.tableRow}>
                <td className={styles.tableRowElementText}>Terms</td>
                <td className={styles.tableRowElement}>10 days</td>
                <td className={styles.tableRowElement}>20 days</td>
                <td className={styles.tableRowElement}>30 days</td>
              </tr>
              <tr className={styles.tableRow}>
                <td className={styles.tableRowElementText}></td>
                <td className={clsx(styles.tableRowElement, styles.tableRowElementButton)}><Button title='SEND REQUEST'
                                                                                                   size='small' /></td>
                <td className={clsx(styles.tableRowElement, styles.tableRowElementButton)}><Button title='SEND REQUEST'
                                                                                                   size='small' /></td>
                <td className={clsx(styles.tableRowElement, styles.tableRowElementButton)}><Button title='SEND REQUEST'
                                                                                                   size='small' /></td>
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