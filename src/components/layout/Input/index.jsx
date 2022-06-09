import React from 'react'
import PropTypes from 'prop-types'

import styles from './Input.module.css'

const Input = ({ type, text, name, placeholder, handleOnChange, value }) => {
  return (
    <div className={styles.form_control}>
      <label htmlFor={name}>{text}:</label>
      <input type={type} name={name} id={name} placeholder={placeholder} onChange={handleOnChange} value={value} />
    </div>
  )
}

Input.propTypes = {
  type: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  handleOnChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired
}

Input.defaultProps = {
  value: ''
}

export default Input
