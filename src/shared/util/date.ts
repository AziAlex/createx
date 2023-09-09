export const createDate = (data: string): string => {
  const date = new Date(data)

  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December',
  ]

  const monthIndex = date.getMonth()
  const day = date.getDate()
  const year = date.getFullYear()

  return `${months[monthIndex]} ${day}, ${year}`
}