import React, { useState } from 'react';

import Header from '../components/Header'

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
    </main>
  )
}
