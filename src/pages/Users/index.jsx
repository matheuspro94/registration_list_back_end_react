import React from 'react'

import Message from '../../components/layout/Message'
import Container from '../../components/layout/Container'
import LinkButton from '../../components/layout/LinkButton'
import styles from './Users.module.css'

const Users = () => {
  const userId = JSON.parse(localStorage.getItem('userId'))

  return (
    <div className={styles.users_container}>
      <div className={styles.title_container}>
        <h1>All Users</h1>
        <LinkButton to="/newusers" text="New User" />
      </div>
      {userId && <Message type="success" msg="User created successfully" />}
      <Container className="start">
        <p>Projetos...</p>
      </Container>
    </div>
  )
}

export default Users
