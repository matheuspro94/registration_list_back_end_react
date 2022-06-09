import React from 'react'
import { Link } from 'react-router-dom'
import styles from './navbar.module.css'

const Navbar = () => {
  return (
    <div className={styles.headerContainer}>
      <h1>Registration List</h1>
      <ul className={styles.navContainer}>
        <li className={styles.item}><Link to="/">Home</Link></li>
        <li className={styles.item}><Link to="/users">User Registration</Link></li>
        <li className={styles.item}><Link to="/about">About</Link></li>
      </ul>
    </div>
  )
}

export default Navbar
