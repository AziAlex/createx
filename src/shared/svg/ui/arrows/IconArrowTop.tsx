import React, {FC} from 'react';

export const IconArrowTop: FC<{ className: string }> = ({className}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
    <path fillRule="evenodd" clipRule="evenodd"
          d="M6.79289 9.20711C6.40237 8.81658 6.40237 8.18342 6.79289 7.79289L11.2929 3.29289C11.6834 2.90237 12.3166 2.90237 12.7071 3.29289L17.2071 7.79289C17.5976 8.18342 17.5976 8.81658 17.2071 9.20711C16.8166 9.59763 16.1834 9.59763 15.7929 9.20711L13 6.41421V20C13 20.5523 12.5523 21 12 21C11.4477 21 11 20.5523 11 20V6.41421L8.20711 9.20711C7.81658 9.59763 7.18342 9.59763 6.79289 9.20711Z"
          fill="#1E212C"/>
  </svg>
);