import React from 'react'
import PropTypes from 'prop-types'
import { BsPencil, BsFillTrashFill } from 'react-icons/bs'

import styles from './UsersCard.module.css'
import { Link } from 'react-router-dom'

const UsersCard = ({ id, name, email, birthday, age, handleRemove }) => {
  const removeUser = (e) => {
    e.preventDefault()
    handleRemove(id)
  }

  return (
    <div className={styles.user_card}>
      <h4>{name}</h4>
      <p><span>Email: </span>{email}</p>
      <p><span>Birthday: </span>{birthday}</p>
      <p><span>Age: </span>{age}</p>
      <div className={styles.user_cart_actions}>
        <Link to={`/user/${id}`}>
          <BsPencil /> Edit
        </Link>
        <button onClick={removeUser}>
          <BsFillTrashFill /> Delete
        </button>
      </div>
    </div>
  )
}

UsersCard.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  birthday: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  handleRemove: PropTypes.func.isRequired
}

export default UsersCard
