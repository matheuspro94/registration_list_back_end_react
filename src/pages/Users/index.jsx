import React, { useEffect } from 'react'
import axios from 'axios'

import Message from '../../components/layout/Message'
import LinkButton from '../../components/layout/LinkButton'
import UsersCard from '../../components/UsersCard'
import Loading from '../../components/layout/Loading'
import styles from './Users.module.css'

const Users = () => {
  const userId = JSON.parse(localStorage.getItem('userId'))
  const [users, setUsers] = React.useState([])
  const [loading, setLoading] = React.useState(false)
  const [message, setMessage] = React.useState('')

  useEffect(() => {
    axios.get('http://localhost:5000/users')
      .then(res => {
        setUsers(res.data.users)
        setTimeout(() => {
          localStorage.removeItem('userId')
        }, 3000)
        setLoading(true)
      })
      .catch(err => console.log(err))
  }, [])

  const handleRemove = (id) => {
    axios.delete(`http://localhost:5000/users/${id}`)
      .then(res => {
        setUsers(users.filter(user => user.id !== id))
        setMessage(res.data.message)
      })
      .catch(err => console.log(err))
  }

  return (
    <div className={styles.users_container}>
      <div className={styles.title_container}>
        <h1>All Users</h1>
        <LinkButton to="/newusers" text="New User" />
      </div>
      {userId && <Message type="success" msg="User created successfully" />}
      {message && <Message type="success" msg={message} />}
        {users.length > 0 &&
          users.map((user) => (
            <UsersCard
              key={user.id}
              id={user.id}
              name={user.name}
              email={user.email}
              birthday={user.birthday}
              age={user.age}
              handleRemove={handleRemove}
            />
          ))}
          {!loading && <Loading />}
          {loading && !users.length && (
            <p>There are no users</p>
          )}
    </div>
  )
}

export default Users
