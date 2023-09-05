import React, { FC } from 'react'

export const IconClose: FC<{ className: string }> = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="#000000"
    stroke-width="2"
    stroke-linecap="butt"
    stroke-linejoin="arcs"
  >
    <line x1="18" y1="6" x2="6" y2="18"></line>
    <line x1="6" y1="6" x2="18" y2="18"></line>
  </svg>
)
