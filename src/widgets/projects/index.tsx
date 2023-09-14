import { FC } from 'react'

import ShowCaseSlider from '@/feature/sliders/showcase-slider'
import FooterBlock from '@/shared/ui/footer-block'
import Button from '@/shared/ui/btns/btn'
import Wrap from '@/shared/ui/wrap'
import { TCard } from '@/shared/types/projects'

import styles from './style.module.scss'

interface IProps {
  title: string
  cards: TCard[]
}

const ProjectShowcase: FC<IProps> = ({ cards, title }) => (
  <Wrap>
    <div className={styles.showcase}>
      <h2 className={styles.title}>{title}</h2>
      <ShowCaseSlider cards={cards} />
      <FooterBlock title='Explore all our works'>
        <Button title='View portfolio' size='large' solid />
      </FooterBlock>
    </div>
  </Wrap>
)

export default ProjectShowcase
