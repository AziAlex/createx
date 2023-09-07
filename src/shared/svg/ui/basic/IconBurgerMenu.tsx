import React, {FC} from 'react'

export const IconBurgerMenu: FC<{ className: string }> = ({className}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
    <path fillRule="evenodd" clipRule="evenodd"
          d="M1 12C1 11.4477 1.44772 11 2 11H22C22.5523 11 23 11.4477 23 12C23 12.5523 22.5523 13 22 13H2C1.44772 13 1 12.5523 1 12Z"
          fill="#1E212C"/>
    <path fillRule="evenodd" clipRule="evenodd"
          d="M1 18C1 17.4477 1.44772 17 2 17H22C22.5523 17 23 17.4477 23 18C23 18.5523 22.5523 19 22 19H2C1.44772 19 1 18.5523 1 18Z"
          fill="#1E212C"/>
    <path fillRule="evenodd" clipRule="evenodd"
          d="M1 6C1 5.44772 1.44772 5 2 5H22C22.5523 5 23 5.44772 23 6C23 6.55228 22.5523 7 22 7H2C1.44772 7 1 6.55228 1 6Z"
          fill="#1E212C"/>
  </svg>
)
