import React from 'react'

export interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title: string
  size: 'large' | 'regular' | 'small'
  solid?: boolean
  fill?: boolean
  disabled?: boolean
}