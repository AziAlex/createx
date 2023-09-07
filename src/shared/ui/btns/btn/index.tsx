import React, { FC } from 'react'

import cl from './style.module.scss'

interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title: string
  size: 'large' | 'regular' | 'small'
  solid?: boolean
  fill?: boolean
}

const Button: FC<IProps> = ({ title, fill, solid, size, ...props }) => (
  <button
    className={[
      cl.button,
      solid ? cl.solid : null,
      fill ? cl.fill : null,
      cl[size],
    ].join(' ')}
    {...props}
  >
    {title}
  </button>
)

export default Button
