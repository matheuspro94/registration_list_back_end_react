import React from 'react'
import PropTypes from 'prop-types'
import { useNavigate } from 'react-router-dom'

import Input from '../Input'
import SubmitButton from '../SubmitButton'
import styles from './Form.module.css'

const Form = ({ handleSubmit, error, btnText, userData }) => {
  const [user, setUser] = React.useState(userData || {})
  const navigate = useNavigate()

  const submit = async (e) => {
    e.preventDefault()
    const res = await handleSubmit(user)

    if (res.request.status === 200) {
      navigate('/users')
    }
  }

  const handleOnChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value })
  }

  return (
    <form className={styles.form} onSubmit={submit}>
      <Input type="text" placeholder="Enter your name" name="name" text="Name" handleOnChange={handleOnChange} value={user.name}/>
      <Input type="email" placeholder="Enter your email" name="email" text="Email" handleOnChange={handleOnChange} value={user.email}/>
      <Input type="date" placeholder="Enter your birthday" name="birthday" text="Birthday" handleOnChange={handleOnChange} value={user.birthday}/>
      {error && <p className={styles.error}>{error}</p>}
      <SubmitButton text={btnText} />
    </form>
  )
}

Form.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  userData: PropTypes.object,
  btnText: PropTypes.string.isRequired,
  error: PropTypes.string
}

export default Form
