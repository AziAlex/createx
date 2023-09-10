interface Form {
  [key: string]: string; // Здесь вы можете заменить 'any' на конкретный тип, если он известен
}

export const isFormRequired = (form: Form, listUnRequired: string[]): boolean => {
  const newForm = { ...form }

  for (const key in newForm) {
    if (listUnRequired.includes(key)) {
      delete newForm[key]
    }
  }

  return Object.keys(newForm).every((fieldName) => {
    return newForm[fieldName].length
  })
}