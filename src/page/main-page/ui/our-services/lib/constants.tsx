import { IconName } from '@/shared/svg'

export type TCard = {
  img: IconName
  alt: string
  title: string
}

export const cards: TCard[] = [
  {
    img: 'construction',
    alt: 'construction',
    title: 'Construction',
  },
  {
    img: 'plan',
    alt: 'plan',
    title: 'Project Development',
  },
  {
    img: 'pantone',
    alt: 'pantone',
    title: 'Interior Design',
  },
  {
    img: 'painting',
    alt: 'painting',
    title: 'Repairs',
  },
]
