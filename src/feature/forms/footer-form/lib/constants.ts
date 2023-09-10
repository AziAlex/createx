import React from 'react'

interface IFormInputs {
  label: string
  labelHtmlFor: string
  placeholder: string
  type: React.HTMLInputTypeAttribute
  required?: boolean
}

export const initialValues = {
  name: '',
  phone: '',
  email: '',
  message: '',
}

export const FormInputs: IFormInputs[] = [
  {
    label: 'Name',
    labelHtmlFor: 'name',
    placeholder: 'Your name',
    type: 'text',
    required: true,
  }, {
    label: 'Phone',
    labelHtmlFor: 'phone',
    placeholder: 'Your phone number',
    type: 'text',
  }, {
    label: 'Email',
    labelHtmlFor: 'email',
    placeholder: 'Your working email',
    type: 'email',
    required: true,
  }, {
    label: 'Message',
    labelHtmlFor: 'message',
    placeholder: 'Your message',
    type: 'text',
    required: true,
  },
]

