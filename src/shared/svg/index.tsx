import React, { FC } from 'react'

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
  IconCross,
  IconLike,
  IconSlippers,
  IconHand,
} from '@/shared/svg/Icon'

export type IconName =
  | 'logo'
  | 'arrow-convert'
  | 'arrow-down'
  | 'arrow-left'
  | 'arrow-right'
  | 'arrow-top'
  | 'chat'
  | 'chevrons-down'
  | 'chevrons-top'
  | 'cross'
  | 'hand'
  | 'like'
  | 'menu'
  | 'phone'
  | 'slippers'

interface Iprops {
  name: IconName
  className: string
}

const Icon: FC<Iprops> = ({ name, className }) => {
  const icons: { [key: string]: React.ReactNode } = {
    arrowConvert: <IconArrowConvert className={className} />,
    arrowDown: <IconArrowDown className={className} />,
    arrowLeft: <IconArrowLeft className={className} />,
    arrowRight: <IconArrowRight className={className} />,
    arrowTop: <IconArrowTop className={className} />,
    chat: <IconChat className={className} />,
    chevronsDown: <IconChevronsDown className={className} />,
    chevronsTop: <IconChevronsTop className={className} />,
    cross: <IconCross className={className} />,
    hand: <IconHand className={className} />,
    like: <IconLike className={className} />,
    logo: <IconLogo className={className} />,
    menu: <IconBurgerMenu className={className} />,
    phone: <IconPhone className={className} />,
    slippers: <IconSlippers className={className} />,
  }

  return <>{icons[name]}</>
}

export default Icon
