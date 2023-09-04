import React, {FC, PropsWithChildren} from 'react';

import cl from "./style.module.scss"

const Wrap: FC<PropsWithChildren> = ({children}) => {
  return (
    <div className={cl.wrap}>
      <div>{children}</div>
    </div>
  );
};

export default Wrap;