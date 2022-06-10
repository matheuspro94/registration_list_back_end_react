import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

import Loading from '../../components/layout/Loading'

import styles from './User.module.css'
import Form from '../../components/layout/Form'

const User = () => {
  const { id } = useParams()
  const [user, setUser] = React.useState([])
  const [showUserForm, setShowUserForm] = React.useState(false)
  const [error, setError] = React.useState(null)

  useEffect(() => {
    axios.get(`http://localhost:5000/users/${id}`)
      .then(res => {
        setUser(res.data)
      })
      .catch(err => console.log(err))
  }, [id])

  const editPost = (user) => {
    console.log(user)
    return axios.put(`http://localhost:5000/users/${user.id}`, user)
      .then(res => {
        console.log(res)
        setUser(res.data)
        setShowUserForm(false)
      })
      .catch(err => {
        setError(err.response.data.error)
        console.log(err)
      })
  }

  const toggleUserForm = () => {
    setShowUserForm(!showUserForm)
  }

  return (
    <>
      {user.name
        ? <div className={styles.user_details}>
          <div className={styles.details_container}>
            <h1>{user.name}</h1>
            <button className={styles.btn} onClick={toggleUserForm}>{!showUserForm ? 'Edit User' : 'Close'}</button>
            {!showUserForm
              ? (
                <div className={styles.user_info}>
                  <p><span>Email: </span>{user.email}</p>
                  <p><span>Birthday: </span>{user.birthday}</p>
                  <p><span>Age: </span>{user.age}</p>
                </div>
                )
              : (
                <div className={styles.user_info}>
                  <Form
                    handleSubmit={editPost}
                    btnText="Update User"
                    userData={user}
                  />
                  {error && <p className={styles.error}>{error}</p>}
                </div>
                )}
          </div>
        </div>
        : <Loading />}
    </>
  )
}

export default User
