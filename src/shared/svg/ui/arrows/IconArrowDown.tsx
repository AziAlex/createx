import React, {FC} from 'react';

export const IconArrowDown: FC<{ className: string }> = ({className}) => (
  <svg className={className} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none">
    <path fillRule="evenodd" clipRule="evenodd" d="M17.2071 14.7929C17.5976 15.1834 17.5976 15.8166 17.2071 16.2071L12.7071 20.7071C12.3166 21.0976 11.6834 21.0976 11.2929 20.7071L6.79289 16.2071C6.40237 15.8166 6.40237 15.1834 6.79289 14.7929C7.18342 14.4024 7.81658 14.4024 8.20711 14.7929L11 17.5858V4C11 3.44772 11.4477 3 12 3C12.5523 3 13 3.44772 13 4V17.5858L15.7929 14.7929C16.1834 14.4024 16.8166 14.4024 17.2071 14.7929Z" fill="#1E212C"/>
  </svg>
);