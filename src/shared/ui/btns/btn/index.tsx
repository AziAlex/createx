import React, { FC } from 'react'

import { IButtonProps } from '@/shared/types/ui'

import styles from './style.module.scss'

const Button: FC<IButtonProps> = ({ title, fill, solid, size, disabled, text, active, ...props }) => (
  <button
    className={[
      styles.button,
      solid ? styles.solid : null,
      fill ? styles.fill : null,
      text ? styles.text : null,
      active ? styles.active : null,
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
