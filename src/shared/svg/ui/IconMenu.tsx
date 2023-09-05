import React, { FC } from 'react'

export const IconMenu: FC<{ className: string }> = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="#FF5A30"
    stroke-width="2"
    stroke-linecap="butt"
    stroke-linejoin="arcs"
  >
    <line x1="3" y1="12" x2="21" y2="12"></line>
    <line x1="3" y1="6" x2="21" y2="6"></line>
    <line x1="3" y1="18" x2="21" y2="18"></line>
  </svg>
)
