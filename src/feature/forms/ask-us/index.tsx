'use client'

import React, { useState } from 'react'
import Button from '@/shared/ui/btns/btn'
import Input from '@/shared/ui/input'
import { initValues } from './lib/constants'

import styles from './style.module.scss'

const AskUsForm = () => {
  const [values, setValues] = useState(initValues)
  const error = Object.values(values).some((value) => !value.length)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    alert(JSON.stringify(values, null, 2))
    setValues(initValues)
  }

  return (
    <form className={styles.form__wrapper} onSubmit={handleSubmit}>
      <div className={styles.flex__block}>
        <Input
          label='Name'
          type='text'
          placeholder='Your name'
          name='name'
          onChange={handleChange}
          value={values.name}
          required
        />

        <Input
          label='Phone'
          type='phone'
          placeholder='Your phone'
          name='phone'
          onChange={handleChange}
          value={values.phone}
          required
        />
      </div>

      <div className={styles.flex__block}>
        <Input
          label='Message'
          type='text'
          placeholder='Your message'
          name='message'
          onChange={handleChange}
          value={values.message}
          required
        />

        <Button
          title='Send'
          size='regular'
          solid
          disabled={error}
        />
      </div>
    </form>
  )
}

export default AskUsForm
