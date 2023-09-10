export const isValuedPhone = (value: string, name: string): boolean => {
  return value.split('').every((char, index) => {
      if (name === 'phone') {
        if (index === 0) {
          return char === '+' || char >= '0' && char <= '9'
        }
        return char >= '0' && char <= '9'
      }
    },
  )
}