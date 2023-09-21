'use client'

import React, { FC } from 'react'

type TProps = {
  children: React.ReactNode
}

const template: FC<TProps> = ({ children }) => {
  console.log('template dashbord')

  return (
    <div>
      template
      {children}
    </div>
  )
}

export default template
