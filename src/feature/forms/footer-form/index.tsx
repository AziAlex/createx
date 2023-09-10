'use client'

import React, { useEffect, useState } from 'react'

import styles from './style.module.scss'
import { FormInputs, initialValues } from '@/feature/forms/footer-form/lib/constants'
import Input from '../../../shared/ui/inputs/input'
import CheckBox from '@/shared/ui/btns/check-box'
import Button from '@/shared/ui/btns/btn'
import Textarea from '@/shared/ui/inputs/textarea'
import { isValuedPhone } from '@/shared/util/isValuePhoneNumber'
import { isFormRequired } from '@/shared/util/isFormRequired'
import { handleFormSubmit } from '@/shared/util/handlers/handle-submit'
import { useForm } from '@/shared/hooks/useForm'

const FormFooter = () => {
  const { form, formDisable, errorPhone, handleChange } = useForm(initialValues)

  return (
    <form className={styles.form}>
      <h3>A quick way to discuss details</h3>
      <div className={styles.inputs}>
        {FormInputs.map((item, index) => {
          if (index === 3) return

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
        })}
        <Textarea
          label={FormInputs[3].label}
          placeholder={FormInputs[3].placeholder}
          name={FormInputs[3].labelHtmlFor}
          value={form[FormInputs[3].labelHtmlFor as keyof typeof form]}
          onChange={(e) => handleChange(e, FormInputs[3].labelHtmlFor)}
          required
        />
      </div>
      <div className={styles.footer}>
        <CheckBox />
        <p>I agree to receive communications from Createx Construction Bureau.</p>
      </div>
      <Button
        title='send request'
        size='large'
        disabled={formDisable}
        solid
        onClick={(e) => handleFormSubmit(e, form)}
      />
    </form>
  )
}

export default FormFooter