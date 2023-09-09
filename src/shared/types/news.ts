type TNews = 'Company News' | 'Innovation' | 'Industry News' | 'Expert Tips' | 'Marketing'

export interface INewsCard {
  id: number
  img: string
  title: string
  type: TNews
  date: string
  comments: number
  description: string
}