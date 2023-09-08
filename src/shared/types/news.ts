type TNewsType = 'Company News' | 'Innovation' | 'Industry News' | 'Expert Tips' | 'Marketing'

export interface INewsCard {
  id: number
  img: string
  title: string
  type: TNewsType
  date: string
  comments: number
  description: string
}