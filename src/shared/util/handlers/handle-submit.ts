import React from 'react'

type StringObject = {
  [key: string]: string;
};

export const handleFormSubmit = (e: React.MouseEvent<HTMLButtonElement>, form: StringObject) => {
  e.preventDefault()
  alert(JSON.stringify(form, null, 2))
}