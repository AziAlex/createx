import React, { FC } from 'react'

import { IButtonProps } from '@/shared/types/ui'

import styles from './style.module.scss'

const Button: FC<IButtonProps> = ({ title, fill, solid, size, disabled, ...props }) => (
  <button
    className={[
      styles.button,
      solid ? styles.solid : null,
      fill ? styles.fill : null,
      styles[size],
      disabled ? styles.disabled : null,
    ].join(' ')}
    {...props}
    disabled={disabled}
  >
    {title}
  </button>
)

export default Button
