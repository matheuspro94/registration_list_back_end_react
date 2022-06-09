import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import styles from './LinkButton.module.css'

const LinkButton = ({ to, text }) => {
  return (
    <Link className={styles.btn} to={to}>
      {text}
    </Link>
  )
}

LinkButton.propTypes = {
  to: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
}

export default LinkButton
