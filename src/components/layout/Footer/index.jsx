import React from 'react'
import { FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa'

import styles from './footer.module.css'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <ul className={styles.socialList}>
        <li>
          <FaLinkedin className={styles.icon} />
        </li>
        <li>
          <FaInstagram className={styles.icon} />
        </li>
        <li>
          <FaGithub className={styles.icon} />
        </li>
      </ul>
      <p className={styles.copyright}><span>Registration List</span> &copy; 2022</p>
    </footer>
  )
}

export default Footer
