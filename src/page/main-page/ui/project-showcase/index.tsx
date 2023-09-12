import FooterBlock from '@/shared/ui/footer-block'
import Button from '@/shared/ui/btns/btn'

import styles from './style.module.scss'
import Wrap from '@/shared/ui/wrap'
import ShowCaseSlider from '@/feature/sliders/showcase-slider'

const ProjectShowcase = () => {
  return (
    <Wrap>
      <div className={styles.showcase}>
        <h2 className={styles.title}>
          Browse our selected projects and learn more about our work
        </h2>
        <ShowCaseSlider />
        <FooterBlock title='Explore all our works'>
          <Button title='View portfolio' size='large' solid />
        </FooterBlock>
      </div>
    </Wrap>
  )
}

export default ProjectShowcase
