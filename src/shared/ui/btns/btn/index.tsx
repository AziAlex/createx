import React, { FC } from 'react'

import cl from './style.module.scss'

interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title: string
  size: 'large' | 'regular' | 'small'
  solid?: boolean
  fill?: boolean
  disabled?: boolean
}

const Button: FC<IButtonProps> = ({ title, fill, solid, size, disabled, ...props }) => (
  <button
    className={[
      cl.button,
      solid ? cl.solid : null,
      fill ? cl.fill : null,
      cl[size],
      disabled ? cl.disabled : null,
    ].join(' ')}
    {...props}
    disabled={disabled}
  >
    {title}
  </button>
)

export interface IButtonProps extends IProps{}
export default Button
