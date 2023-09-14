import { IconName } from '@/shared/svg'
import { IButtonProps } from '@/shared/types/ui'


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

export interface ITableData {
  tableHeader: ITableHeaderItem[];
  tableBody: Array<ITableBodyRowItem[]>;
  tableFooter: ITableFooterItem[]
}
