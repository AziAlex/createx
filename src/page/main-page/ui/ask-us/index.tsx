import Wrap from '@/shared/ui/wrap'
import AskUsForm from '@/feature/forms/ask-us'

import styles from './styles.module.scss'

const AskUs = () => (
  <Wrap>
    <div className={styles.container}>
      <h3>Want to know more? Ask us a question:</h3>
      <div className={styles.form}>
        <AskUsForm />
      </div>
    </div>
  </Wrap>
)
export default AskUs
