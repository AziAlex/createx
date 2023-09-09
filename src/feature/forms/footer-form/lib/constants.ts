import React from 'react'

interface IFormInputs {
  label: string
  labelHtmlFor: string
  placeholder: string
  type: React.HTMLInputTypeAttribute
  message?: boolean
}

export const FormInputs: IFormInputs[] = [
  {
    label: 'Name*',
    labelHtmlFor: 'name',
    placeholder: 'Your name',
    type: 'text',
  }, {
    label: 'Phone*',
    labelHtmlFor: 'phone',
    placeholder: 'Your phone number',
    type: 'number',
  }, {
    label: 'Email',
    labelHtmlFor: 'email',
    placeholder: 'Your working email',
    type: 'email',
  }, {
    label: 'Message*',
    labelHtmlFor: 'name',
    placeholder: 'Your message',
    type: 'text',
    message: true,
  },
]