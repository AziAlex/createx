import React from 'react'

interface IForm {
  [key: string]: string
}

export const handleFormSubmit = (e: React.MouseEvent<HTMLButtonElement>, form: IForm) => {
  e.preventDefault()
  alert(JSON.stringify(form, null, 2))
}