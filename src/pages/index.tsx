import React, { useState } from 'react';

import Header from '../components/Header'
import Profile from '../components/Profile'
import ProfileNav from '../components/ProfileNav'
import Repositories from '../components/Repositories'

import styles from './main.module.scss'

export default function Home() {
  const [keyPressed, setKeyPressed] = useState('')

  return (
    <main className={styles.app} tabIndex={0}
      onKeyDown={(e) => {
        e.preventDefault()
        setKeyPressed(e.key)
      }}
    >
      <Header keyPressed={keyPressed} />
      <ProfileNav />
      <div className={styles.content} >
        <Profile />
        <Repositories />
      </div>
    </main>
  )
}
