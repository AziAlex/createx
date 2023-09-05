import React, {FC} from 'react';

import cl from "./style.module.scss"

interface IProps {
  title: string
  type: "large" | "regular" | "small"
  solid?: boolean
  fill?: boolean
}

const Button: FC<IProps> = ({title, fill, solid, type}) => (
  <button
    className={[
      cl.button,
      solid ? cl.solid : null,
      fill ? cl.fill : null,
      cl[type]
    ].join(" ")}
  >
    {title}
  </button>
)

export default Button;