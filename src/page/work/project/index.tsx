import { FC } from 'react'
import Header from '@/widgets/header'
import Constructive from './ui/constructive'

const Work: FC<{ id: string }> = ({ id }) => (
  <>
    <Header />
    <Constructive />
  </>
)

export default Work
