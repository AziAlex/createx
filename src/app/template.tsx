'use client'

import React, { FC } from 'react'

type TProps = {
  children: React.ReactNode
}

const template: FC<TProps> = ({ children }) => {
  return (
    <div>
      MainTemplate
      {children}
    </div>
  )
}

export default template
