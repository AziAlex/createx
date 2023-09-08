import styles from './style.module.scss'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  labelHtmlFor?: string
}

const Input: React.FC<InputProps> = ({ label, labelHtmlFor, ...props }) => (
  <div className={styles.input}>
    {label && <label htmlFor={labelHtmlFor}>{label}</label>}
    <input {...props} />
  </div>
)

export default Input
