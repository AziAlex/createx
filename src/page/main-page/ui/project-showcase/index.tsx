import Projects from '@/widgets/projects'
import { cards } from '@/page/main-page/ui/project-showcase/lib/constants'

import styles from './style.module.scss'

const ProjectShowcase = () => (
  <div className={styles.wrap}>
    <Projects
      title='Browse our selected projects and learn more about our work'
      cards={cards}
    />
  </div>
)

export default ProjectShowcase
