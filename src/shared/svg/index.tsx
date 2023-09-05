import React, { FC } from 'react'

import {
  IconArrow,
  IconChat,
  IconClose,
  IconLogo,
  IconMenu,
  IconPhone,
} from '@/shared/svg/Icon'

export type IconName = 'arrow' | 'chat' | 'close' | 'logo' | 'menu' | 'phone'

interface Iprops {
  name: IconName
  className: string
}

const Icon: FC<Iprops> = ({ name, className }) => {
  const icons: { [key: string]: React.ReactNode } = {
    arrow: <IconArrow className={className} />,
    chat: <IconChat className={className} />,
    close: <IconClose className={className} />,
    logo: <IconLogo className={className} />,
    menu: <IconMenu className={className} />,
    phone: <IconPhone className={className} />,
  }

  return <>{icons[name]}</>
}

export default Icon
