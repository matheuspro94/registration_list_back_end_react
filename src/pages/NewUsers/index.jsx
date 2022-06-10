import React from 'react'
import axios from 'axios'

import Form from '../../components/layout/Form'
import styles from './NewUsers.module.css'

const NewUsers = () => {
  const [error, setError] = React.useState(null)

  const createPost = (user) => {
    return axios.post('http://localhost:5000/users', user)
      .then(res => {
        localStorage.setItem('userId', res.data.id)
        return res
      })
      .catch(err => {
        setError(err.response.data.error)
        setTimeout(() => {
          setError(false)
        }, 5000)
      })
  }

  return (
    <div className={styles.users_constainer}>
      <h1>Create Your Records</h1>
      <p>It is time to create your user</p>
      <Form handleSubmit={createPost} error={error} />
    </div>
  )
}

export default NewUsers
