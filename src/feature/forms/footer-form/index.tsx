'use client'

import React from 'react'

import { FormInputs, initialValues } from '@/feature/forms/footer-form/lib/constants'
import { handleFormSubmit } from '@/shared/util/handlers/handle-submit'
import { useForm } from '@/shared/hooks/useForm'
import CheckBox from '@/shared/ui/btns/check-box'
import Button from '@/shared/ui/btns/btn'
import Textarea from '@/shared/ui/inputs/textarea'
import Input from '@/shared/ui/inputs/input'

import styles from './style.module.scss'

const FormFooter = () => {
  const { form, formDisable, errorPhone, handleChange } = useForm(initialValues)

  return (
    <form className={styles.form}>
      <h3>A quick way to discuss details</h3>
      <div className={styles.inputs}>
        {FormInputs.map((item, index) => {
          if (item.labelHtmlFor !== 'message') {
            return (
              <Input
                key={index}
                label={item.label}
                labelHtmlFor={item.labelHtmlFor}
                placeholder={item.placeholder}
                type={item.type}
                required={item.required}
                value={form[item.labelHtmlFor as keyof typeof form]}
                onChange={(e) => handleChange(e, item.labelHtmlFor)}
                error={item.labelHtmlFor === 'phone' && errorPhone}
              />
            )
          } else return (
            <Textarea
              key={index}
              label={item.label}
              placeholder={item.placeholder}
              name={item.labelHtmlFor}
              value={form[item.labelHtmlFor as keyof typeof form]}
              onChange={(e) => handleChange(e, item.labelHtmlFor)}
              required
            />
          )
        })}
      </div>
      <div className={styles.footer}>
        <CheckBox />
        <p>I agree to receive communications from Createx Construction Bureau.</p>
      </div>
      <Button
        title='send request'
        size='regular'
        disabled={formDisable}
        solid
        onClick={(e) => handleFormSubmit(e, form)}
      />
    </form>
  )
}

export default FormFooter