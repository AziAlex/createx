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
  IconPlay,
  IconConstruction,
  IconPainting,
  IconPlan,
  IconPantone,
  IconHeart,
  IconFacebook,
  IconMessanger,
  IconTwitter,
  IconWhatsapp,
  IconYouTube,
  IconOkMark
} from '@/shared/svg/Icon'

export type IconName =
  | 'arrowConvert'
  | 'arrowDown'
  | 'arrowLeft'
  | 'arrowRight'
  | 'arrowTop'
  | 'chat'
  | 'chevronsDown'
  | 'chevronsTop'
  | 'construction'
  | 'cross'
  | 'hand'
  | 'like'
  | 'logo'
  | 'menu'
  | 'painting'
  | 'pantone'
  | 'phone'
  | 'plan'
  | 'play'
  | 'heart'
  | 'facebook'
  | 'messenger'
  | 'twitter'
  | 'whatsapp'
  | 'youtube'
  | 'slippers'
  | 'okMark'

interface IProps {
  name: IconName
  className: string
}

const Icon: FC<IProps> = ({ name, className }) => {
  const icons: { [key in IconName]: React.ReactNode } = {
    arrowConvert: <IconArrowConvert className={className} />,
    arrowDown: <IconArrowDown className={className} />,
    arrowLeft: <IconArrowLeft className={className} />,
    arrowRight: <IconArrowRight className={className} />,
    arrowTop: <IconArrowTop className={className} />,
    chat: <IconChat className={className} />,
    chevronsDown: <IconChevronsDown className={className} />,
    chevronsTop: <IconChevronsTop className={className} />,
    construction: <IconConstruction className={className} />,
    cross: <IconCross className={className} />,
    hand: <IconHand className={className} />,
    like: <IconLike className={className} />,
    logo: <IconLogo className={className} />,
    menu: <IconBurgerMenu className={className} />,
    painting: <IconPainting className={className} />,
    pantone: <IconPantone className={className} />,
    phone: <IconPhone className={className} />,
    plan: <IconPlan className={className} />,
    play: <IconPlay className={className} />,
    slippers: <IconSlippers className={className} />,
    heart: <IconHeart className={className} />,
    facebook: <IconFacebook className={className} />,
    messenger: <IconMessanger className={className} />,
    twitter: <IconTwitter className={className} />,
    whatsapp: <IconWhatsapp className={className} />,
    youtube: <IconYouTube className={className} />,
    okMark: <IconOkMark className={className} />,
  }

  return <>{icons[name]}</>
}

export default Icon
