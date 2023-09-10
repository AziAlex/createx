interface IForm {
  [key: string]: string;
}

export const isFormRequired = (form: IForm, listUnRequired: string[]): boolean => {
  const newForm = { ...form }

  for (const key in newForm) {
    if (listUnRequired.includes(key)) {
      delete newForm[key]
    }
  }

  return Object.keys(newForm).every((fieldName) => newForm[fieldName].length)
}