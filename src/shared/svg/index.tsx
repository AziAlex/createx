import React, {FC} from 'react';

import {IconPhone} from "@/shared/svg/Icon";

export type IconName = "phone"

interface Iprops {
  name: IconName
  className: string
}


const Icon: FC<Iprops> = ({name, className}) => {
  const icons: { [key: string]: React.ReactNode } = {
    phone: <IconPhone className={className}/>
  }

  return <>{icons[name]}</>
};

export default Icon;