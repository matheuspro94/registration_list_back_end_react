import React, { useEffect } from 'react'
import axios from 'axios'
import Message from '../../components/layout/Message'
import Container from '../../components/layout/Container'
import LinkButton from '../../components/layout/LinkButton'
import styles from './Users.module.css'
import UsersCard from '../../components/UsersCard'

const Users = () => {
  const userId = JSON.parse(localStorage.getItem('userId'))
  const [users, setUsers] = React.useState([])

  useEffect(() => {
    axios.get('http://localhost:5000/users')
      .then(res => {
        setUsers(res.data.users)
      })
      .catch(err => console.log(err))
  }, [])

  return (
    <div className={styles.users_container}>
      <div className={styles.title_container}>
        <h1>All Users</h1>
        <LinkButton to="/newusers" text="New User" />
      </div>
      {userId && <Message type="success" msg="User created successfully" />}
      <Container className="start">
        {users.length > 0 &&
          users.map((user) => (
            <UsersCard
              key={user.id}
              id={user.id}
              name={user.name}
              email={user.email}
              birthday={user.birthday}
              age={user.age}
            />
          ))}
      </Container>
    </div>
  )
}

export default Users
