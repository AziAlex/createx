'use client'

import { useState } from 'react'
import Button from '@/shared/ui/btns/btn'
import Wrap from '@/shared/ui/wrap'
import Input from '@/shared/ui/input'
import { initValues } from './lib/constants'

import styles from './styles.module.scss'

const AskUs = () => {
  const [values, setValues] = useState(initValues)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    alert(JSON.stringify(values, null, 2))
    setValues(initValues)
  }

  return (
    <Wrap>
      <div className={styles.container}>
        <h3>Want to know more? Ask us a question:</h3>
        <div className={styles.form}>
          <form className={styles.form__wrapper} onSubmit={handleSubmit}>
            <div className={styles.flex__block}>
              <Input
                label="Name"
                type="text"
                placeholder="Your name"
                name="name"
                onChange={handleChange}
                value={values.name}
              />

              <Input
                label="Phone"
                type="phone"
                placeholder="Your phone"
                name="phone"
                onChange={handleChange}
                value={values.phone}
                className="example"
              />
            </div>

            <div className={styles.flex__block}>
              <Input
                label="Message"
                type="text"
                placeholder="Your message"
                name="message"
                onChange={handleChange}
                value={values.message}
              />

              <Button title="Send" size="regular" solid />
            </div>
          </form>
        </div>
      </div>
    </Wrap>
  )
}

export default AskUs
