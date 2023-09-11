'use client'

import React, { useEffect, useState } from 'react'

import styles from './style.module.scss'
import Input from '@/shared/ui/inputs/input'
import Button from '@/shared/ui/btns/btn'
import { handleFormSubmit } from '@/shared/util/handlers/handle-submit'


const SuscrbeForm = () => {
  const [value, setValue] = useState('')
  const [formDisable, setFormDisable] = useState(false)

  useEffect(() => {
    if (value.length) {
      setFormDisable(false)
    } else {
      setFormDisable(true)
    }
  }, [value])

  return (
    <form className={styles.form}>
      <Input
        type='email'
        placeholder='Your email address'
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <Button
        title='Subscribe'
        size='regular'
        solid
        disabled={formDisable}
        onClick={(e) => handleFormSubmit(e, { email: value })}
      />

    </form>
  )
}

export default SuscrbeForm