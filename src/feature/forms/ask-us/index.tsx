'use client'

import React, { useState } from 'react'
import Button from '@/shared/ui/btns/btn'
import Input from '../../../shared/ui/inputs/input'
import { initValues } from './lib/constants'

import styles from './style.module.scss'
import { handleFormSubmit } from '@/shared/util/handlers/handle-submit'
import { useForm } from '@/shared/hooks/useForm'

const AskUsForm = () => {
  const { form, formDisable, errorPhone, handleChange } = useForm(initValues)

  return (
    <form className={styles.form__wrapper}>
      <div className={styles.flex__block}>
        <Input
          label='Name'
          type='text'
          placeholder='Your name'
          name='name'
          onChange={(e) => handleChange(e, 'name')}
          value={form.name}
          required
        />

        <Input
          label='Phone'
          type='phone'
          placeholder='Your phone'
          name='phone'
          onChange={(e) => handleChange(e, 'phone')}
          value={form.phone}
          error={errorPhone}
        />
      </div>

      <div className={styles.flex__block}>
        <Input
          label='Message'
          type='text'
          placeholder='Your message'
          name='message'
          onChange={(e) => handleChange(e, 'message')}
          value={form.message}
          required
        />

        <Button
          title='Send'
          size='regular'
          solid
          onClick={(e) => handleFormSubmit(e, form)}
          disabled={formDisable}
        />
      </div>
    </form>
  )
}

export default AskUsForm
