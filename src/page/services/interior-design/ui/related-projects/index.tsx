import Projects from '@/widgets/projects'
import { cards } from './lib/constants'

import styles from './style.module.scss'

const RelatedProjects = () => (
  <div className={styles.wrap}>
    <Projects title="Related projects" cards={cards} />
  </div>
)

export default RelatedProjects
