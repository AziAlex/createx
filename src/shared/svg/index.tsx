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
  IconCamera,
  IconContract,
  IconHelmet,
  IconCheckMark,
  IconCheck,
} from '@/shared/svg/Icon'

export type IconName =
  | 'arrowConvert'
  | 'arrowDown'
  | 'arrowLeft'
  | 'arrowRight'
  | 'arrowTop'
  | 'camera'
  | 'chat'
  | 'chevronsDown'
  | 'chevronsTop'
  | 'construction'
  | 'contract'
  | 'cross'
  | 'facebook'
  | 'hand'
  | 'heart'
  | 'helmet'
  | 'like'
  | 'logo'
  | 'menu'
  | 'messenger'
  | 'painting'
  | 'pantone'
  | 'phone'
  | 'plan'
  | 'play'
  | 'slippers'
  | 'twitter'
  | 'whatsapp'
  | 'youtube'
  | 'checkMark'
  | 'check'

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
    camera: <IconCamera className={className} />,
    chat: <IconChat className={className} />,
    chevronsDown: <IconChevronsDown className={className} />,
    chevronsTop: <IconChevronsTop className={className} />,
    construction: <IconConstruction className={className} />,
    contract: <IconContract className={className} />,
    cross: <IconCross className={className} />,
    facebook: <IconFacebook className={className} />,
    hand: <IconHand className={className} />,
    heart: <IconHeart className={className} />,
    helmet: <IconHelmet className={className} />,
    like: <IconLike className={className} />,
    logo: <IconLogo className={className} />,
    menu: <IconBurgerMenu className={className} />,
    messenger: <IconMessanger className={className} />,
    painting: <IconPainting className={className} />,
    pantone: <IconPantone className={className} />,
    phone: <IconPhone className={className} />,
    plan: <IconPlan className={className} />,
    play: <IconPlay className={className} />,
    slippers: <IconSlippers className={className} />,
    twitter: <IconTwitter className={className} />,
    whatsapp: <IconWhatsapp className={className} />,
    youtube: <IconYouTube className={className} />,
    checkMark: <IconCheckMark className={className} />,
    check: <IconCheck className={className} />,
  }

  return <>{icons[name]}</>
}

export default Icon
