import React, {FC} from 'react'

import {
  IconArrowConvert,
  IconLogo,
  IconArrowDown,
  IconArrowLeft,
  IconArrowRight,
  IconArrowTop,
  IconPhone,
  IconChat,
  IconBurgerMenu,
  IconChevronsDown,
  IconChevronsTop,
  IconCross
} from '@/shared/svg/Icon'

export type IconName =
  'logo'
  | 'phone'
  | 'arrow-down'
  | 'arrow-left'
  | 'arrow-right'
  | 'arrow-top'
  | 'chevrons-down'
  | 'chevrons-top'
  | 'arrow-convert'
  | 'menu'
  | 'chat'
  | 'cross'

interface Iprops {
  name: IconName
  className: string
}

const Icon: FC<Iprops> = ({name, className}) => {
  const icons: { [key: string]: React.ReactNode } = {
    arrowTop: <IconArrowTop className={className}/>,
    arrowDown: <IconArrowDown className={className}/>,
    arrowRight: <IconArrowRight className={className}/>,
    arrowLeft: <IconArrowLeft className={className}/>,
    arrowConvert: <IconArrowConvert className={className}/>,
    logo: <IconLogo className={className}/>,
    phone: <IconPhone className={className}/>,
    menu: <IconBurgerMenu className={className}/>,
    chat: <IconChat className={className}/>,
    chevronsDown: <IconChevronsDown className={className}/>,
    chevronsTop: <IconChevronsTop className={className}/>,
    cross: <IconCross className={className}/>
  }

  return <>{icons[name]}</>
}

export default Icon
