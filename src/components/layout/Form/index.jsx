import React from 'react'
import PropTypes from 'prop-types'

import Input from '../Input'
import SubmitButton from '../SubmitButton'
import styles from './Form.module.css'

const Form = ({ handleSubmit }) => {
  const [user, setUser] = React.useState({})

  const submit = (e) => {
    e.preventDefault()
    handleSubmit(user)
  }

  const handleOnChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value })
  }

  return (
    <form className={styles.form} onSubmit={submit}>
      <Input type="text" placeholder="Enter your name" name="name" text="Name" handleOnChange={handleOnChange} value={user.name}/>
      <Input type="email" placeholder="Enter your email" name="email" text="Email" handleOnChange={handleOnChange} value={user.email}/>
      <Input type="date" placeholder="Enter your birthday" name="birthday" text="Birthday" handleOnChange={handleOnChange} value={user.birthday}/>
      <SubmitButton text="Create User"/>
    </form>
  )
}

Form.propTypes = {
  handleSubmit: PropTypes.func.isRequired
}

export default Form
