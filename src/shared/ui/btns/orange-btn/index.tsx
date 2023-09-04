import React, {FC} from 'react';

import cl from "./style.module.scss"

const OrangeBtn: FC<{ title: string }> = ({title}) => (
  <button className={cl.button}>{title}</button>
)

export default OrangeBtn;