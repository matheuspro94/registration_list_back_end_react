import React from 'react'
import axios from 'axios'

import Form from '../../components/layout/Form'
import styles from './Users.module.css'

const Users = () => {
  const createPost = (user) => {
    console.log(user)
    axios.post('http://localhost:8080/users', user)
      .then(res => {
        console.log(res)
      }).catch(err => {
        console.log(err)
      })
  }

  return (
    <div className={styles.users_constainer}>
      <h1>Create Your Records</h1>
      <p>It is time to create your user</p>
      <Form handleSubmit={createPost}/>
    </div>
  )
}

export default Users
