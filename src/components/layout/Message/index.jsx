import React, { useEffect } from 'react'
import PropTypes from 'prop-types'

import styles from './Message.module.css'

const Message = ({ type, msg }) => {
  const [visible, setVisible] = React.useState(false)

  useEffect(() => {
    if (!msg) {
      setVisible(false)
    }

    setVisible(true)

    const timer = setTimeout(() => {
      setVisible(false)
    }, 3000)

    return () => clearTimeout(timer)
  }, [msg])

  return (
    <>
    {visible && (
      <div className={`${styles.message} ${styles[type]}`}>{msg}</div>
    )}
    </>
  )
}

Message.propTypes = {
  type: PropTypes.string.isRequired,
  msg: PropTypes.string.isRequired
}

export default Message
