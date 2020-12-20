import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        Boilerplate <a href="https://nextjs.org">Next.js!</a>
      </h1>
    </div>
  )
}
