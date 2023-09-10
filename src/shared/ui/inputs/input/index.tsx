import React from 'react'
import styles from './style.module.scss'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  labelHtmlFor?: string;
  error?: boolean;
}

const Input: React.FC<InputProps> = ({ label, error, labelHtmlFor, ...props }) => (
  <div className={styles.input}>
    {label && <label htmlFor={labelHtmlFor}>{label}{props.required ? '*' : ''}</label>}
    <input {...props} />
    {error && <span className={styles.error}>Invalid number! example: +4872346783</span>}
  </div>
)

export default Input
