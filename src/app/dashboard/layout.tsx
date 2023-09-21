'use client'
import React, { FC } from 'react'

type TProps = {
  children: React.ReactNode
}

const DashboardLayout: FC<TProps> = ({ children }) => {
  console.log('DashboardLayout')
  return (
    <div>
      <h2>Hello</h2>
      {children}
    </div>
  )
}

export default DashboardLayout
