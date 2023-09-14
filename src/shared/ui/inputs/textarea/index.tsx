import React from 'react'
import styles from './style.module.scss'

interface IProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  labelHtmlFor?: string;
}

const TeaxtArea: React.FC<IProps> = ({ label, labelHtmlFor, ...props }) => (
  <div className={styles.input}>
    {label && <label htmlFor={labelHtmlFor}>{label}{props.required ? '*' : ''}</label>}
    <textarea {...props} cols={30} rows={2} />
  </div>
)

export default TeaxtArea
