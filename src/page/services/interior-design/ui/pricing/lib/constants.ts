import { IconName } from '@/shared/svg'
import { IButtonProps } from '@/shared/ui/btns/btn'

interface ITableData {
  tableHeader: ITableHeaderItem[];
  tableBody: Array<ITableBodyRowItem[]>;
  tableFooter: ITableFooterItem[]
}

interface ITableHeaderItem {
  title: string;
  subtitle?: string;
  style?: string
}

interface ITableBodyRowItem {
  type: 'title' | 'text' | 'icon'
  body?: string
  iconName?: IconName
}

interface ITableFooterItem {
  type: 'empty' | 'button' | 'text' | 'title'
  props?: IButtonProps
  body?: string
}

export const tableData: ITableData = {
  tableHeader: [
    { title: 'Items', style: 'small' },
    { title: 'BASIC', subtitle: '$20 per m2' },
    { title: 'STANDARD', subtitle: '$30 per m2' },
    { title: 'BUSINESS', subtitle: '$40 per m2' },
  ],
  tableBody: [
    [
      { type: 'title', body: 'Installation plan' },
      { type: 'icon', iconName: 'checkMark' },
      { type: 'icon', iconName: 'checkMark' },
      { type: 'icon', iconName: 'checkMark' },
    ],
    [
      { type: 'title', body: 'Planning solutions (2-3 options)' },
      { type: 'icon', iconName: 'checkMark' },
      { type: 'icon', iconName: 'checkMark' },
      { type: 'icon', iconName: 'checkMark' },
    ],
    [
      { type: 'title', body: 'Lighting plan' },
      { type: 'icon', iconName: 'checkMark' },
      { type: 'icon', iconName: 'checkMark' },
      { type: 'icon', iconName: 'checkMark' },
    ],
    [
      { type: 'title', body: 'Flooring plan' },
      { type: 'icon', iconName: 'checkMark' },
      { type: 'icon', iconName: 'checkMark' },
      { type: 'icon', iconName: 'checkMark' },
    ],
    [
      { type: 'title', body: 'Heating floor laying scheme' },
      { type: 'icon', iconName: 'checkMark' },
      { type: 'icon', iconName: 'checkMark' },
      { type: 'icon', iconName: 'checkMark' },
    ],
    [
      { type: 'title', body: 'Air conditioner zones layout' },
      { type: 'icon', iconName: 'checkMark' },
      { type: 'icon', iconName: 'checkMark' },
      { type: 'icon', iconName: 'checkMark' },
    ],
    [
      { type: 'title', body: '3D visualization of all rooms' },
      { type: 'text', body: 'simplified' },
      { type: 'icon', iconName: 'checkMark' },
      { type: 'icon', iconName: 'checkMark' },
    ],
    [
      { type: 'title', body: 'Visualization of each room (3-4 angles)' },
      { type: 'text', body: '' },
      { type: 'text', body: '' },
      { type: 'icon', iconName: 'checkMark' },
    ],
    [
      { type: 'title', body: 'Terms' },
      { type: 'text', body: '10 days' },
      { type: 'text', body: '20 days' },
      { type: 'text', body: '30 days' },
    ],
  ],
  tableFooter: [
    { type: 'empty', body: '' },
    { type: 'button', props: { title: 'SEND REQUEST', size: 'small', onClick: () => console.log('work1') }},
    { type: 'button', props: { title: 'SEND REQUEST', size: 'small', onClick: () => console.log('work2') }},
    { type: 'button', props: { title: 'SEND REQUEST', size: 'small', onClick: () => console.log('work3') }},
  ]
}
