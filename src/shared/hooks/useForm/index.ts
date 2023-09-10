import React, { useState, useEffect } from 'react'

import { isValuedPhone } from '@/shared/util/isValuePhoneNumber'
import { isFormRequired } from '@/shared/util/isFormRequired'

interface FormValues {
  [key: string]: string; // Здесь вы можете заменить 'any' на конкретный тип, если он известен
}


export const useForm = (initialValues: FormValues) => {
  const [form, setForm] = useState(initialValues)
  const [formDisable, setFormDisable] = useState(false)
  const [errorPhone, setErrorPhone] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, name: string) => {
    const { value } = e.target

    const isValueNumber = isValuedPhone(value, name)

    if (name === 'phone') {
      if (isValueNumber) {
        setErrorPhone(false)
      } else {
        setErrorPhone(true)
      }
    }

    if (isValueNumber || name !== 'phone') {
      setForm((prevForm) => ({
        ...prevForm,
        [name]: value,
      }))
    }
  }

  useEffect(() => {
    const error = isFormRequired(form, ['phone'])

    setFormDisable(!error)
  }, [form])

  return { form, formDisable, errorPhone, handleChange }
}