import { IconName } from '@/shared/svg'

export type Card = {
  img: IconName
  title: string
  text: string
 }

export const cards: Card[] = [
  {
    img: 'like',
    title: 'Quality',
    text: 'Culpa nostrud commodo ea consequat aliquip reprehenderit. Veniam velit nostrud aliquip sunt.',
  },
  {
    img: 'hand',
    title: 'Safety',
    text: 'Anim reprehenderit sint voluptate exercitation adipisicing laborum adipisicing. Minim empor est ea.',
  },
  {
    img: 'slippers',
    title: 'Comfort',
    text: 'Sit veniam aute dolore adipisicing nulla sit culpa. Minim mollit voluptate ullamco proident ea ad.',
  },
]
