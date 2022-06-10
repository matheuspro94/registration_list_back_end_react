import React from 'react'

import registration from '../../helpers/img/cadastro.png'
import LinkButton from '../../components/layout/LinkButton'
import styles from './Home.module.css'

const Home = () => {
  return (
    <section className={styles.home_container}>
      <h1>Welcome To The <span>Registration List</span> App</h1>
      <p>Start here to create your registration list</p>
      <LinkButton to="/newusers" text="Start"/>
      <img src={registration} alt="registration" className={styles.registration} />
    </section>
  )
}

export default Home
