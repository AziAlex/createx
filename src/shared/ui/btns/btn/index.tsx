import React, { FC } from 'react'

import cl from './style.module.scss'

interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title: string
  size: 'large' | 'regular' | 'small'
  solid?: boolean
  fill?: boolean
  disabled?: boolean
}

/**
 * Renders a button component with the given props.
 *
 * @param title (string) - The title of the button.
 * @param fill (boolean) - Whether the button should be filled.
 * @param solid (boolean) - Whether the button should be solid.
 * @param size (large | regular | small) - The size of the button.
 * @param disabled (boolean) - Whether the button should be disabled.
 */

const Button: FC<IProps> = ({
  title,
  fill,
  solid,
  size,
  disabled,
  ...props
}) => (
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

export default Button
