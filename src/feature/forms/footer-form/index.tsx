import React from 'react'

import styles from './style.module.scss'
import { FormInputs } from '@/feature/forms/footer-form/lib/constants'
import Input from '@/shared/ui/input'

const FormFooter = () => {
  return (
    <form className={styles.form}>
      <h3>A quick way to discuss details</h3>
      {FormInputs.map((item, index) => (
        <Input
          key={index}
          label={item.label}
          labelHtmlFor={item.labelHtmlFor}
          placeholder={item.placeholder}
          type={item.type}
        />
      ))}
      <div className={styles.footer}>
        <p>I agree to receive communications from Createx Construction Bureau.</p>
      </div>
    </form>
  )
}

export default FormFooter