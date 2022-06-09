import React from 'react'
import PropTypes from 'prop-types'

import styles from './SubmitButton.module.css'

const SubmitButton = ({ text }) => {
  return (
    <div>
      <button className={styles.btn}>{text}</button>
    </div>
  )
}

SubmitButton.propTypes = {
  text: PropTypes.string.isRequired
}

export default SubmitButton
