'use client'

import React, { useState } from 'react'

import styles from './style.module.scss'

const CheckBox = () => {
  const [active, setActive] = useState(false)

  return (
    <button
      className={[styles.checkBox, active ? styles.active : null].join(' ')}
      onClick={() => setActive(!active)}
      type='button'
    />
  )
}

export default CheckBox